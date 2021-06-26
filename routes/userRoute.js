//include library
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("../models/User");
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

    // check email already exists or not
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (user) {
          return res.status(409).json({
            status: false,
            message: "User already exists",
          });
        } else {

          // encrypting the password
          const salt = bcrypt.genSaltSync(10);
          const hashedPassword = bcrypt.hashSync(req.body.password, salt);

          //Create new object from userModel
          const newUser = new User({
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword,
          });

          // Saving the user into database
          newUser
            .save()
            .then((result) => {
              return res.status(200).json({
                status: true,
                user: result,
              });
            })
            .catch((error) => {
              return res.status(502).json({
                status: false,
                error: error,
              });
            });
        }
      })
      .catch((error) => {
        return res.status(409).json({
          status: false,
          error: error,
        });
      });
  }
);
module.exports = router;
