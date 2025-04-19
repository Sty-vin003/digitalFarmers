// const express = require('express');
// const mysql = require('mysql');
// const bodyParser = require('body-parser');
// const path = require('path');
// const fs = require('fs');
// const cors = require('cors');

// const adminApp = express();

// // Enable CORS
// adminApp.use(cors({
//     origin: 'http://localhost:3040',
//     methods: ['GET', 'POST', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));

// // Middleware
// adminApp.use(bodyParser.json());
// adminApp.use(bodyParser.urlencoded({ extended: true }));
// adminApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // Database connection
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'gardening_app'
// });

// db.connect((err) => {
//     if (err) {
//         console.error('❌ Database connection failed:', err);
//         process.exit(1);
//     }
//     console.log('✅ Connected to MySQL database');
// });

// // Verify tables exist on startup
// db.query('SHOW TABLES', (err, results) => {
//     if (err) {
//         console.error('❌ Error checking tables:', err);
//     } else {
//         console.log('📊 Existing tables:', results.map(r => Object.values(r)[0]));
//     }
// });

// // Dashboard endpoint
// adminApp.get('/admin/dashboard-data', async (req, res) => {
//     try {
//         const [users, plants, chats] = await Promise.all([
//             query('SELECT COUNT(*) as count FROM users'),
//             query('SELECT COUNT(*) as count FROM plants'),
//             query('SELECT COUNT(*) as count FROM chat_messages')
//         ]);

//         const videos = await new Promise((resolve) => {
//             fs.readdir('./uploads', (err, files) => {
//                 resolve(err ? 0 : files.length);
//             });
//         });

//         res.json({
//             success: true,
//             totalUsers: users[0].count,
//             totalPlants: plants[0].count,
//             totalChats: chats[0].count,
//             totalVideos: videos,
//             chartData: {
//                 labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
//                 data: [12, 19, 3, 5, 2, 3, 10]
//             }
//         });
//     } catch (error) {
//         console.error('❌ Dashboard error:', error);
//         res.status(500).json({ 
//             success: false,
//             error: 'Failed to load dashboard data'
//         });
//     }
// });

// // Helper function for database queries
// function query(sql) {
//     return new Promise((resolve, reject) => {
//         db.query(sql, (err, results) => {
//             if (err) {
//                 console.error(`❌ Query error (${sql}):`, err);
//                 reject(err);
//             } else {
//                 resolve(results);
//             }
//         });
//     });
// }

// // Users endpoints
// adminApp.get('/admin/users', (req, res) => {
//     db.query('SELECT id, user_name, email FROM users', (err, results) => {
//         if (err) {
//             console.error('❌ Error fetching users:', err);
//             res.status(500).json({ error: 'Failed to fetch users' });
//         } else {
//             res.json(results);
//         }
//     });
// });

// adminApp.delete('/admin/users/:id', (req, res) => {
//     db.query('DELETE FROM users WHERE id = ?', [req.params.id], (err) => {
//         if (err) {
//             console.error('❌ Error deleting user:', err);
//             res.status(500).json({ success: false });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// // Plants endpoints
// adminApp.get('/admin/plants', (req, res) => {
//     db.query('SELECT * FROM plants', (err, results) => {
//         if (err) {
//             console.error('❌ Error fetching plants:', err);
//             res.status(500).json({ error: 'Failed to fetch plants' });
//         } else {
//             res.json({ plants: results });
//         }
//     });
// });

// adminApp.delete('/admin/plants/:id', (req, res) => {
//     db.query('DELETE FROM plants WHERE id = ?', [req.params.id], (err) => {
//         if (err) {
//             console.error('❌ Error deleting plant:', err);
//             res.status(500).json({ success: false });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// // Chat endpoints
// adminApp.get('/admin/chats', (req, res) => {
//     db.query('SELECT * FROM chat_messages ORDER BY created_at DESC', (err, results) => {
//         if (err) {
//             console.error('❌ Error fetching chats:', err);
//             res.status(500).json({ error: 'Failed to fetch chats' });
//         } else {
//             res.json(results);
//         }
//     });
// });

// adminApp.delete('/admin/chats/:id', (req, res) => {
//     db.query('DELETE FROM chat_messages WHERE id = ?', [req.params.id], (err) => {
//         if (err) {
//             console.error('❌ Error deleting chat:', err);
//             res.status(500).json({ success: false });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// // Video endpoints
// adminApp.get('/admin/videos', (req, res) => {
//     fs.readdir('./uploads', (err, files) => {
//         if (err) {
//             console.error('❌ Error fetching videos:', err);
//             res.status(500).json({ error: 'Failed to fetch videos' });
//         } else {
//             res.json(files.map(file => `/uploads/${file}`));
//         }
//     });
// });

// adminApp.delete('/admin/videos', (req, res) => {
//     const filePath = path.join(__dirname, 'uploads', req.body.filename);
//     fs.unlink(filePath, (err) => {
//         if (err) {
//             console.error('❌ Error deleting video:', err);
//             res.status(500).json({ success: false });
//         } else {
//             res.json({ success: true });
//         }
//     });
// });

// // Serve admin interface
// adminApp.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'admin.html'));
// });

// // Start server
// const PORT = 3040;
// adminApp.listen(PORT, () => {
//     console.log(`🚀 Admin server running on http://localhost:${PORT}`);
// });

const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const adminApp = express();

// Enable CORS
adminApp.use(cors({
    origin: 'http://localhost:3040',
    methods: ['GET', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));

// Middleware
adminApp.use(bodyParser.json());
adminApp.use(bodyParser.urlencoded({ extended: true }));
adminApp.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'gardening_app'
});

db.connect((err) => {
    if (err) {
        console.error('❌ Database connection failed:', err);
        process.exit(1);
    }
    console.log('✅ Connected to MySQL database');
});

// Dashboard endpoint
adminApp.get('/admin/dashboard-data', async (req, res) => {
    try {
        const [users, plants, chats] = await Promise.all([
            query('SELECT COUNT(*) as count FROM users'),
            query('SELECT COUNT(*) as count FROM plants'),
            query('SELECT COUNT(*) as count FROM chat_messages')
        ]);

        const videos = await new Promise((resolve) => {
            fs.readdir('./uploads', (err, files) => {
                resolve(err ? 0 : files.length);
            });
        });

        res.json({
            success: true,
            totalUsers: users[0].count,
            totalPlants: plants[0].count,
            totalChats: chats[0].count,
            totalVideos: videos,
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                data: [12, 19, 3, 5, 2, 3, 10]
            }
        });
    } catch (error) {
        console.error('❌ Dashboard error:', error);
        res.status(500).json({ 
            success: false,
            error: 'Failed to load dashboard data'
        });
    }
});

// Helper function for database queries
function query(sql) {
    return new Promise((resolve, reject) => {
        db.query(sql, (err, results) => {
            if (err) {
                console.error(`❌ Query error (${sql}):`, err);
                reject(err);
            } else {
                resolve(results);
            }
        });
    });
}

// Users endpoints
adminApp.get('/admin/users', (req, res) => {
    db.query('SELECT id, user_name, email FROM users', (err, results) => {
        if (err) {
            console.error('❌ Error fetching users:', err);
            res.status(500).json({ error: 'Failed to fetch users' });
        } else {
            res.json(results);
        }
    });
});

// Plants endpoints
adminApp.get('/admin/plants', (req, res) => {
    db.query('SELECT * FROM plants', (err, results) => {
        if (err) {
            console.error('❌ Error fetching plants:', err);
            res.status(500).json({ error: 'Failed to fetch plants' });
        } else {
            res.json({ plants: results });
        }
    });
});

// Chat endpoints - Fixed endpoint to match frontend
adminApp.get('/admin/chat-messages', (req, res) => {
    db.query('SELECT * FROM chat_messages ORDER BY created_at DESC', (err, results) => {
        if (err) {
            console.error('❌ Error fetching chats:', err);
            res.status(500).json({ error: 'Failed to fetch chats' });
        } else {
            res.json({ messages: results }); // Changed to match frontend expectation
        }
    });
});

// Video endpoints - Fixed video URLs
adminApp.get('/admin/videos', (req, res) => {
    fs.readdir('./uploads', (err, files) => {
        if (err) {
            console.error('❌ Error fetching videos:', err);
            res.status(500).json({ error: 'Failed to fetch videos' });
        } else {
            res.json({ 
                videos: files.map(file => `http://localhost:3040/uploads/${file}`) 
            });
        }
    });
});

// Serve admin interface
adminApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Start server
const PORT = 3040;
adminApp.listen(PORT, () => {
    console.log(`🚀 Admin server running on http://localhost:${PORT}`);
});