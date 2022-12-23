const asyncHandler = require("express-async-handler");
const User = require("../model/User");

const registerUser = asyncHandler(async (req, res) => {
  const { name, phone, message } = req.body;

  const userExists = await User.findOne({ phone });

  if (userExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }
  const user = await User.create({
    name,
    phone,
    message,
  });
  if (user) {
    res.status(201).json({
      name: user.name,
      phone: user.phone,
      message: user.message,
    });
  } else {
    res.status(400);
    throw new Error("INVALID USER DATA");
  }
});

module.exports = registerUser;
