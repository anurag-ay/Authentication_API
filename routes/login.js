const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email: email });
  if (!user) return res.status(404).send("Email or Password is Incorrect");

  const userName = user.name;

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) return res.status(401).send("Password is Incorrect");

  const payload = { userName, email };
  const token = jwt.sign(payload, "MySecretKey");

  res.json({ token: token });
});

module.exports = router;
