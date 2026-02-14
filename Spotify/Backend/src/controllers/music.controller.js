const Music = require("../models/music.model");
const uploadFile = require("../services/storage.service");
const jwt = require("jsonwebtoken");

const createMusic = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if(decoded.role !== "artist") {return res.status(403).json({ message: "You don't have an access to create a music" }); }

  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }

  const { uri, title, artist, info } = req.body;
  const file = req.file;

  const result = await uploadFile(file);

  const music = await Music.create({
    uri: result.url,
    title,
    artist,
    info, 
    artist: decoded.id,
  });

  res.status(201).json({ music });
};


module.exports = { createMusic };