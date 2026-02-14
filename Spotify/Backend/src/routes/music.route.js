const express = require("express");
const { createMusic, createAlbum } = require("../controllers/music.controller");
const multer = require("multer");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload",  upload.single("music"), createMusic);
router.post("/create-album", createAlbum);

module.exports = router;
