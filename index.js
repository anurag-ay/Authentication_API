const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//--------Importing routes----------------
const user = require("./routes/user");
const login = require("./routes/login");
const verifyToken = require("./routes/verifyToken");

//------middleware--------
app.use(express.json());
app.use(cors());

//---------DB-------------------

mongoose
  .connect("mongodb://localhost:27017/auth")
  .then(console.log("mongoDB connected.."))
  .catch((err) => console.log(err));

//------------router---------------
app.use("/api/user", user);
app.use("/api/login", login);
app.use("/api/verifyToken", verifyToken);

//---------Home----------------------

app.get("/", (req, res) => {
  res.send("Check OK");
});

//-------------Port--------------------------
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Running on port ${port}.....`);
});
