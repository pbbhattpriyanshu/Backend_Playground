const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model');

const app = express();
app.use(express.json());

const upload = multer({storage: multer.memoryStorage()});

app.get('/', (req, res) => {
    res.send('Welcome to the IG Post API');
});

app.post('/create-post', upload.single("image") , async (req, res) => {
    const result = await uploadFile(req.file.buffer, req.file.originalname);

    const newPost = await postModel.create({
        image: result.url,
        caption: req.body.caption
    })

    res.status(200).json({message: "Post created successfully", post: newPost});
});


module.exports = app; // Export the Express app instance