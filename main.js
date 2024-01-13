// Imports
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000; // in case .env failed

// Database Connection
// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);
// mongoose.connect(process.env.DB_URI);
// const db = mongoose.connection;
// db.on('error', (error) => console.log(error));
// db.once('open', () => console.log('Successfully connected to the database!'));

// Set Middleware //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.use(
//     session({
//         secret: 'my secret key',
//         saveUninitialized: true,
//         resave: false,
//     })
// );

// app.use((req, res, next) => {
//     res.locals.message = req.session.message;
//     delete req.session.message;
//     next();
// });

// Set Template Engine
app.set('view engine', 'ejs');

// Route Prefix
app.use("", require("./routes/routes"));

// app.get('/', (req, res) => {
//     res.send('Hello World');
// });

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});