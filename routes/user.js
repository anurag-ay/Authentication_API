const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User already exist");

  const { name, email, password } = req.body;

  user = new User({
    name,
    email,
    password,
  });

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  user.password = hash;

  user = await user.save();
  res.send(user);
});

module.exports = router;
