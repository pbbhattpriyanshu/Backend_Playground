// Express server require
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
})

// Start the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
})