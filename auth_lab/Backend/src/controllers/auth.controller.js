const userModel = require("../models/auth.model");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await userModel.create({ email, username, password });

    const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.cookie('token', token)
    res.status(201).json({ message: "User created successfully", user,});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

module.exports = { signup };
