const userModel = require("../models/user.model");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  // Extract email, username, and password from the request body
  const { email, username, password } = req.body;

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

    const user = await userModel.create({ email, username, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);
    res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating user", error: error.message });
  }
};

module.exports = { signup };
