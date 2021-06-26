//include library
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("../config/database");
const Token_Key = process.env.Token;

// user reister route
// Access public
// url :http://localhost:5000/api/users/register
router.post(
  "/register",
  [
    // check empty fields
    check("username").not().isEmpty().trim().escape(),
    check("password").not().isEmpty().trim().escape(),
    //check email
    check("email").isEmail().normalizeEmail().withMessage(""),
  ],
  (req, res) => {
    const errors = validationResult(req);
    // check error is not empty
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
      });
    }
    return res.status(200).json({
      status: true,
      data: req.body,
    });
  }
);
module.exports = router;
