const Music = require("../models/music.model");
const uploadFile = require("../services/storage.service");
const albumModel = require("../models/album.model");
const jwt = require("jsonwebtoken");

// Create music
const createMusic = async (req, res) => {
  try {
    const { uri, title, artist, info } = req.body;
    const file = req.file;

    const result = await uploadFile(file);

    const music = await Music.create({
      uri: result.url,
      title,
      artist: user.id,
      info
    });

    res.status(201).json({
      message: "Music created successfully", music: {
        id: music._id,
        uri: music.uri,
        title: music.title,
        artist: music.artist,
        info: music.info
      }
    });

  } catch (error) {
    console.log("Error creating music:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create album
const createAlbum = async (req, res) => {
  try {
    const { title, musics } = req.body;

    const album = await albumModel.create({
      title,
      musics,
      artist: user.id
    });

    res.status(201).json({
      message: "Album created successfully", album: {
        id: album._id,
        title: album.title,
        artist: album.artist,
        musics: album.musics
      }
    });

  } catch (error) {
    console.log("Error creating album:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createMusic, createAlbum };