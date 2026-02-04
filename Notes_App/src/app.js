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

app.patch("/update/:index", (req, res) => {
    //Logic to update note
    const index = req.params.index;
    Notes[index] = req.body;

    res.status(200).json({ message: "note update successfully", note: Notes})
})

app.delete('/delete/:index', (req, res) => {
    // Logic to delete a note by index
    const noteIndex = parseInt(req.params.index, 10);
    if (noteIndex >= 0 && noteIndex < Notes.length) {
        Notes.splice(noteIndex, 1);
        res.status(200).json({message: 'Note deleted successfully!', notes: Notes});
    } else {
        res.status(404).json({message: 'Note not found!'});
    }
});

module.exports = app; // Export the Express app instance