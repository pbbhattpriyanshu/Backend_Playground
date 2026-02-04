const express = require('express');
const noteModel = require('./models/note.model'); // Import the note model

const app = express();
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Welcome to the Notes App!');  
})

app.post('/create', async (req, res) => {
    // Logic to create a new note
    console.log(req.body); // Assuming body-parser middleware is used
    const data = req.body;
    await noteModel.create({
        title: data.title,
        description: data.description
    });

    res.status(201).json({message: 'Note created successfully!'});
});

app.get('/notes', async (req, res) => {
    // Logic to retrieve all notes
    const notes = await noteModel.find();

    res.status(200).json({
        message: 'Notes retrieved successfully!',
        notes: notes
    });
});

app.patch("/update/:id", async (req, res) => {
    //Logic to update note
    const noteId = req.params.id;
    const data = req.body;
    const updateNote = await noteModel.findByIdAndUpdate( noteId, data);

    if (updateNote) {
        res.status(200).json({ message: "note update successfully", updateNote: updateNote})
    } else {
        res.status(404).json({message: 'Note not found!'});
    }
})

app.delete('/delete/:id', async (req, res) => {
    // Logic to delete a note by id
    const noteId = req.params.id;
    const deletedNote = await noteModel.findByIdAndDelete(noteId);
    if (deletedNote) {
        res.status(200).json({message: 'Note deleted successfully!', deletedNote: deletedNote});
    } else {
        res.status(404).json({message: 'Note not found!'});
    }
});

module.exports = app; // Export the Express app instance