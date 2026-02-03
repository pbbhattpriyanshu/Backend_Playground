const express = require('express');

const app = express();
app.use(express.json());

const Notes = [];

app.get('/', (req, res) => {
    res.send('Welcome to the Notes App!');  
})

app.post('/create', (req, res) => {
    // Logic to create a new note
    console.log(req.body); // Assuming body-parser middleware is used
    Notes.push(req.body);
    res.status(201).json({message: 'Note created successfully!'});
});

app.get('/notes', (req, res) => {
    // Logic to retrieve all notes
    res.status(200).json({
        message: 'Notes retrieved successfully!',
        notes: Notes
    });
});

module.exports = app; // Export the Express app instance