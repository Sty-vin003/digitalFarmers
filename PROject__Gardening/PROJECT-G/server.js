const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); 
const session = require('express-session');
const app = express();
const path = require('path');
const multer = require('multer');
const fs = require('fs');
const http = require('http');
const socketIO = require('socket.io');

// Initialize the app and server
const server = http.createServer(app);
const io = socketIO(server);



app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } 
}));


// Set up MySQL connection
const db = mysql.createConnection({
    host: 'localhost', 
    user: 'root',      
    password: '',      
    database: 'gardening_app' 
});

// Connect to MySQL
db.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL database.');
});


app.use(express.static(__dirname));

// Middleware to protect routes (home.html)
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next(); 
    } else {
        res.redirect('/login'); 
    }
}


app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.post('/index', async (req, res) => {
    const { name, email, password, confirm_password } = req.body;

    if (password !== confirm_password) {
        return res.status(400).send('Passwords do not match.');
    }

    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert data into the database
    const query = "INSERT INTO users (user_name, email, password) VALUES (?, ?, ?)";
    db.query(query, [name, email, hashedPassword], (err, result) => {
        if (err) throw err;
        console.log('User data inserted:', result);

        res.redirect('/login');
    });
});

// handle plantsForm submission
app.post('/plants', async (req, res) => {
    const { name, description, careInstructions} = req.body;

    console.log('Received plant data:', req.body);

    const query = "INSERT INTO plants (name, description, care_instructions) VALUES (?, ?, ?)";
    db.query(query, [ name, description, careInstructions ], (err, result) => {
        if (err){
            console.error('Error inserting data:', err);
            res.status(500).send('Internal Server Error');
        }
        else {
            console.log('plants  data inserted:', result);
            res.send('plant submitted successfully');
        }
        
    });
});

// fetch plants data from the database
app.get('/get-plants', (req, res) => {
    const query = 'SELECT * FROM plants';
    
    db.query(query, (err, results) => {
        if (err) {
            res.json({ success: false });
        } else {
            res.json({ success: true, plants: results });
        }
    });
});

// Route to show the login form
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});


// Route to handle login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    // Query the database to find the user by email
    const query = "SELECT * FROM users WHERE email = ?";
    db.query(query, [email], async (err, results) => {
        if (err) throw err;

        if (results.length > 0) {
            const user = results[0];

            // Compare hashed passwords
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (isPasswordValid) {
                req.session.user = user;
                res.redirect('/home');
            } else {
                res.status(400).send('Invalid email or password.');
            }
        } else {
            res.status(400).send('Invalid email or password.');
        }
    });
});

// Route to show home.html 
app.get('/home', isAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/home.html');
});



// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/', 
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Generate unique filename
    }
});

// Initialize upload variable with multer configuration
const upload = multer({
    storage: storage,
    limits: { fileSize: 100000000 }, 
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('video'); // Expect a single file with field name 'video'

// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /mp4|mov|avi|mkv/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: Videos Only!'); 
    }
}


// Route to handle video uploads
app.post('/upload-video', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.send({ success: false, message: err });
        } else {
            if (req.file == undefined) {
                res.send({ success: false, message: 'No file selected!' });
            } else {
                res.send({ success: true, message: 'Video uploaded successfully!', file: `uploads/${req.file.filename}` });
            }
        }
    });
});


// Route to get all uploaded videos
app.get('/videos', (req, res) => {
    fs.readdir('./uploads/', (err, files) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Error fetching videos' });
        }
        const videos = files.map(file => `/uploads/${file}`);
        res.json({ success: true, videos });
    });
});


// When a user connects to the socket
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));


app.post('/store-message', (req, res) => {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ success: false, error: 'Message is required.' });
    }
    const insertQuery = 'INSERT INTO chat_messages (message) VALUES (?)';
    db.query(insertQuery, [message], (err, result) => {
      if (err) {
        console.error('Error inserting message:', err);
        return res.status(500).json({ success: false, error: err });
      }
      const insertedId = result.insertId;
      console.log('Message stored with id:', insertedId);
  
      // Schedule deletion after 3 days 
      setTimeout(() => {
        const deleteQuery = 'DELETE FROM chat_messages WHERE id = ?';
        db.query(deleteQuery, [insertedId], (err, result) => {
          if (err) {
            console.error('Error deleting message with id', insertedId, ':', err);
          } else {
            console.log('Message with id', insertedId, 'deleted after 3 days.');
          }
        });
      }, 259200000);
  
      res.json({ success: true, message });
    });
  });

  app.get('/chat-messages', (req, res) => {
    const selectQuery = 'SELECT * FROM chat_messages ORDER BY created_at ASC';
    db.query(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching chat messages:', err);
            return res.status(500).json({ success: false, error: err });
        }
        res.json({ success: true, messages: results });
    });
});


// Admin dashboard data
app.get('/admin/dashboard-data', (req, res) => {
    const getTotalUsers = new Promise((resolve) => {
      db.query('SELECT COUNT(*) as count FROM users', (err, results) => {
        resolve(err ? 0 : results[0].count);
      });
    });
  
    const getTotalPlants = new Promise((resolve) => {
      db.query('SELECT COUNT(*) as count FROM plants', (err, results) => {
        resolve(err ? 0 : results[0].count);
      });
    });
  
    const getTotalChats = new Promise((resolve) => {
      db.query('SELECT COUNT(*) as count FROM chat_messages', (err, results) => {
        resolve(err ? 0 : results[0].count);
      });
    });
  
    const getTotalVideos = new Promise((resolve) => {
      fs.readdir('./uploads/', (err, files) => {
        resolve(err ? 0 : files.length);
      });
    });
  
    // Execute all queries in parallel
    Promise.all([
      getTotalUsers,
      getTotalPlants,
      getTotalChats,
      getTotalVideos
    ]).then(([totalUsers, totalPlants, totalChats, totalVideos]) => {
      const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        data: [12, 19, 3, 5, 2, 3, 10]
      };
  
      res.json({
        totalUsers,
        totalPlants,
        totalChats,
        totalVideos,
        chartData
      });
    }).catch(error => {
      console.error('Error fetching dashboard data:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
  });
  
  // Get all users for admin
  app.get('/admin/users', (req, res) => {
    const query = 'SELECT id, user_name, email FROM users';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  });
  
  // Delete user
  app.delete('/admin/users/:id', (req, res) => {
    const userId = req.params.id;
    const query = 'DELETE FROM users WHERE id = ?';
    
    db.query(query, [userId], (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ success: false, error: err });
      } else {
        res.json({ success: true });
      }
    });
  });
  
  // Delete plant
  app.delete('/admin/plants/:id', (req, res) => {
    const plantId = req.params.id;
    const query = 'DELETE FROM plants WHERE id = ?';
    
    db.query(query, [plantId], (err, result) => {
      if (err) {
        console.error('Error deleting plant:', err);
        res.status(500).json({ success: false, error: err });
      } else {
        res.json({ success: true });
      }
    });
  });
  
  // Delete chat message
  app.delete('/admin/chats/:id', (req, res) => {
    const chatId = req.params.id;
    const query = 'DELETE FROM chat_messages WHERE id = ?';
    
    db.query(query, [chatId], (err, result) => {
      if (err) {
        console.error('Error deleting chat message:', err);
        res.status(500).json({ success: false, error: err });
      } else {
        res.json({ success: true });
      }
    });
  });
  
  // Delete video
  app.delete('/admin/videos', (req, res) => {
    const { videoPath } = req.body;
    const filename = videoPath.split('/').pop();
    const filePath = path.join(__dirname, 'uploads', filename);
  
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error deleting video:', err);
        res.status(500).json({ success: false, error: err });
      } else {
        res.json({ success: true });
      }
    });
  });
  
  app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
  });



// Start the server
app.listen(3022, () => {
    console.log('Server running on http://localhost:3022');
});
