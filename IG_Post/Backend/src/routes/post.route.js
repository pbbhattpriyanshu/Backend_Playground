const express = require('express');
const multer = require('multer');
const { createPost, getPosts } = require('../controllers/post.controller');
const router = express.Router();


const upload = multer({storage: multer.memoryStorage()});

router.post('/create-post', upload.single("image"), createPost);

router.get('/posts', getPosts)


module.exports = router;