const express = require('express');

const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send('Welcome to the IG Post API');
});

module.exports = app; // Export the Express app instance