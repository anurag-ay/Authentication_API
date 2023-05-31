const mongoose = require("mongoose");

const user = mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", user);

//-----------Input Validation using Joi------------
// Strong Password

module.exports = User;
