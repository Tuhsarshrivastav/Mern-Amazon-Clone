//include library
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("../config/database");
const Token_Key = process.env.Token;

//default route
router.get("/login", (req, res) => {
  return res.status(200).json({
    status: true,
    Message: "Kaam kar rha hai bawa",
  });
});
module.exports = router;
