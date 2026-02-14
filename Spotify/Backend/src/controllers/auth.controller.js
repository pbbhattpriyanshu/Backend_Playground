const userModel = require("../models/user.model");
const validator = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  // Extract email, username, and password from the request body
  const { email, username, password, role = "user" } = req.body;

  // Email validation
  const isEmailValid = validator.isEmail(email);

  if (!isEmailValid) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  // Password validation
  function isStrongPassword(password) {
    return validator.isStrongPassword(password, {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
    });
  }

  if (!isStrongPassword(password)) {
    return res.status(400).json({
      message:
        "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, one number, and one symbol.",
    });
  }

  try {
    const isUserExist = await userModel.findOne({ $or: [ {username}, {email} ] });

    if (isUserExist) {
      return res.status(409).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await userModel.create({ email, username, password: hashedPassword, role });

    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);
    res.status(201).json({ message: "User created successfully", user: {id: user._id, username: user.username, role: user.role }});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

const login = async (req, res) => {
  // Extract email, username, and password from the request body
  const { email, username, password } = req.body;

  try {
    const isUserExist = await userModel.findOne({ $or: [ {email}, {username} ] });

    if (!isUserExist) {
      return res.status(404).json({ message: "User does not exist" });
    }

    const isPasswordValid = await bcrypt.compare(password, isUserExist.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ id: isUserExist._id, role: isUserExist.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);
    res.status(201).json({ message: "User logged in successfully", user: {id: isUserExist._id, username: isUserExist.username, role: isUserExist.role }});
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error logging in user", error: error.message });
  }
}

const logout = async (req, res) => {
  res.clearCookie("token");
  res.status(200).json({ message: "User logged out successfully" });
}

module.exports = { signup, login, logout };
