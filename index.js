//Library include
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const database  = require('./config/database')

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Route
app.get("/", (req, res) => {
  return res.status(200).json({ status: true,"message":"Amazon clone home page" });
});

//Server Listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} `);
});
