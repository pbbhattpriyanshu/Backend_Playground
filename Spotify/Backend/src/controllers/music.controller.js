const Music = require("../models/music.model");
const uploadFile = require("../services/storage.service");
const Album = require("../models/album.model");
const jwt = require("jsonwebtoken");

// Create music
const createMusic = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") { return res.status(403).json({ message: "You don't have an access to create a music" }); }

    const { uri, title, artist, info } = req.body;
    const file = req.file;

    const result = await uploadFile(file);

    const music = await Music.create({
      uri: result.url,
      title,
      artist: decoded.id,
      info
    });

    res.status(201).json({ message: "Music created successfully", music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
      info: music.info
    } });

  } catch (error) {
    console.log("Error creating music:", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Create album
const createAlbum = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "artist") { return res.status(403).json({ message: "You don't have an access to create an album" }); }

    const { title, artist, musics } = req.body;

    const album = await Album.create({
      title,
      musics,
      artist: decoded.id
    });

    res.status(201).json({ message: "Album created successfully", album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics
    } });

  } catch (error) {
    console.log("Error creating album:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { createMusic, createAlbum };