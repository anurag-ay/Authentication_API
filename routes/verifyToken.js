const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  const token = req.body.token;

  try {
    const result = jwt.verify(token, "MySecretKey");
  } catch (err) {
    return res.status(401).send("Unauthorized Access");
  }

  res.send(true);
});

module.exports = router;
