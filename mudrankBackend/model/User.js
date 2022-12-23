const { model, Schema, default: mongoose } = require("mongoose");

const user = new Schema({
  name: String,
  phone: Number,
  message: String,
});
const User = mongoose.model("User", user);

module.exports = User;
