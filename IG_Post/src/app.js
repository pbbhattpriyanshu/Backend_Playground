const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the IG Post API');
});



module.exports = app; // Export the Express app instance