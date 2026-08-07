const express = require("express");
const { body } = require("express-validator");

const {
  sendMessage,
} = require("../controllers/contactController");

const router = express.Router();

router.post(
  "/",

  [
    body("name")
      .trim()
      .notEmpty()
      .withMessage("Name is required"),

    body("email")
      .isEmail()
      .withMessage("Valid email is required"),

    body("subject")
      .trim()
      .isLength({ min: 3 })
      .withMessage("Subject must be at least 3 characters"),

    body("message")
      .trim()
      .isLength({ min: 10 })
      .withMessage("Message must be at least 10 characters"),
  ],

  sendMessage
);

module.exports = router;