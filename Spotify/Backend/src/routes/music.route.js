const express = require("express");
const { createMusic, createAlbum } = require("../controllers/music.controller");
const { authArtist } = require("../middlewares/auth.middleware")
const multer = require("multer");

const router = express.Router();

const upload = multer({
    storage: multer.memoryStorage()
})

router.post("/upload", authArtist, upload.single("music"), createMusic);
router.post("/create-album", authArtist, createAlbum);

module.exports = router;
