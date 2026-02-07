const express = require('express');
const cors = require('cors');
const postRoutes = require('./routes/post.route');

const app = express();
app.use(express.json());

app.use(cors()); // Enable CORS for all routes

app.get('/', (req, res) => {
    res.send('Welcome to the IG Post API');
});

app.use(postRoutes); // Use the post routes with a base path of /api

module.exports = app; // Export the Express app instance