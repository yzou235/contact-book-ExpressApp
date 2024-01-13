// Imports
require('dotenv').config();
const express = require('express');
const fs = require('fs');
const mongoose = require('mongoose');
const session = require('express-session');

const app = express();
const PORT = process.env.PORT || 3000; // in case .env failed

// Set Middleware //
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Serve static files from the 'images' directory
app.use('/images', express.static(__dirname + '/images'));

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