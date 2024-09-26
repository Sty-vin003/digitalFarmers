const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // For hashing passwords
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


// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'your-secret-key', // Change to a secure secret key
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false } // Set to true if using HTTPS
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

// Serve static files (for CSS or any assets)
app.use(express.static(__dirname));

// Middleware to protect routes (home.html)
function isAuthenticated(req, res, next) {
    if (req.session.user) {
        next(); // User is authenticated, proceed to the requested page
    } else {
        res.redirect('/login'); // Redirect to login page if not authenticated
    }
}

// Middleware to parse JSON and form-encoded data
app.use(express.json()); // Parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse form data (application/x-www-form-urlencoded)

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Handle GET request to show the form
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Handle POST request to register user
app.post('/index', async (req, res) => {
    const { name, email, password, confirm_password } = req.body;

    // Validate password confirmation
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

        // Send a success message or redirect to login page
        res.redirect('/login');
    });
});

// handle plantsForm submission
app.post('/plants', async (req, res) => {
    const { name, description, careInstructions} = req.body;

    // Log the request body to ensure data is being passed correctly
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
                // Store user information in the session
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

// Route to show home.html (restricted to logged-in users)
app.get('/home', isAuthenticated, (req, res) => {
    res.sendFile(__dirname + '/home.html');
});





// Set storage engine
const storage = multer.diskStorage({
    destination: './uploads/', // Upload folder
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Generate unique filename
    }
});

// Initialize upload variable with multer configuration
const upload = multer({
    storage: storage,
    limits: { fileSize: 100000000 }, // 100MB file limit (adjust as needed)
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
        cb('Error: Videos Only!'); // Reject non-video files
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
        // Return the list of video files
        const videos = files.map(file => `/uploads/${file}`);
        res.json({ success: true, videos });
    });
});


// When a user connects to the socket
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for chat messages from the client
    socket.on('chat message', (msg) => {
        // Broadcast the message to all connected users
        io.emit('chat message', msg);
    });

    // When a user disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Serve uploaded files statically
app.use('/uploads', express.static('uploads'));

// Start the server
app.listen(3022, () => {
    console.log('Server running on http://localhost:3022');
});
