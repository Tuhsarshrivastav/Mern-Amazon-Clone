//include library
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const e = require("express");
const { check, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const moment = require("moment");

const User = require("../models/User");
const Token_Key = process.env.Token;

const storage = require("./strorage");

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
        message: "Form validation error",
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
// user login route
// Access public
// url :http://localhost:5000/api/users/login
router.post(
  "/login",
  [
    // check empty fields
    //check email
    check("email").isEmail().normalizeEmail().withMessage(""),
    check("password").not().isEmpty().trim().escape(),
  ],
  (req, res) => {
    const errors = validationResult(req);

    // check error is not empty
    if (!errors.isEmpty()) {
      return res.status(400).json({
        status: false,
        errors: errors.array(),
        message: "Form validation error",
      });
    }

    // check email already exists or not
    User.findOne({ email: req.body.email })
      .then((user) => {
        //if user does not exist
        if (!user) {
          return res.status(404).json({
            status: false,
            message: "user does not exist",
          });
        } else {
          // match user password
          let isPasswordMatch = bcrypt.compareSync(
            req.body.password,
            user.password
          );
          // check is not  password match
          if (!isPasswordMatch) {
            return res.status(401).json({
              status: false,
              message: "Email and password does not match",
            });
          }
          return res.status(200).json({
            status: true,
            message: "User Login Successfully",
          });
        }
      })
      // if login successfully
      .catch((err) => {
        return res.status(502).json({
          status: flase,
          message: "Databse error..",
        });
      });
  }
);
// user uploadProfilePic route
// Access public
// url :http://localhost:5000/api/users/uploadProfilePic
router.post("/uploadProfilePic", (req, res) => {
  let upload = storage.getProfilePicUpload();

  upload(req, res, (error) => {
    if (error) {
      return res.status(400).json({
        status: false,
        error: error,
        message: "File upload failed",
      });
    } else {
      return res.status(200).json({
        status: true,
        error: error,
        message: "File upload success",
      });
    }
  });
});
module.exports = router;
