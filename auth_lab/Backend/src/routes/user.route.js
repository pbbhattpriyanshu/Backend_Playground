const express = require("express");
const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/profile", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  let user;

  try {
    // In a real application, you would verify the token and fetch user data from the database
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    user = await userModel.findOne({ _id: decoded.id });
    console.log(user);
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid token" });
  }

  res
    .status(200)
    .json({
      message:
        "User Profile route is working! This route will be protected and will return user profile information.",
      username: user.username,
    });
});

module.exports = router;
