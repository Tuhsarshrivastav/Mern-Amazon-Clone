//Library include
require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = process.env.PORT || 5000;
const database = require("./config/database");

//users routes
const userRoute = require("./routes/userRoute");

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//Route Middlewares
app.use("/api/user/", userRoute);

//Server Listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} `);
});
