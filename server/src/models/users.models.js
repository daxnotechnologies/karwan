const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Number, required: true },
  address: { type: String, required: true },
  profilePic: { type: String, required: false },
  password: { type: String, required: true },
});

const users = new mongoose.model("users", UserSchema);

module.exports = users;
