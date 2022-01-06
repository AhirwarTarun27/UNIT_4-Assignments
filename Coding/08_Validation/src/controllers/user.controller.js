const express = require("express");
const { body, validationResult } = require("express-validator");

const router = express.Router();

const User = require("../models/user.model");
const { formatErrors } = require("../utils/validation");

router.post(
  "",
  body("first_name").notEmpty().withMessage("required"),
  body("last_name").notEmpty().withMessage("required"),
  body("email")
    .notEmpty()
    .isEmail()
    .withMessage("required and should be a valid email"),
  body("pincode")
    .isLength({ min: 6, max: 6 })
    .withMessage("required and should be exactly 6 numbers"),
  body("age")
    .notEmpty()
    .withMessage("age is required")
    .custom((value) => {
      if (value <= 0 || value > 100) {
        throw new Error("required and should be between 1 and 100.");
      }
      return true;
    }),
  body("gender")
    .notEmpty()
    .withMessage("gender is required")
    .custom((value) => {
      console.log("here");
      if (value === "Male" || value === "Female" || value === "others") {
        return true;
      }
      throw new Error("required and should be either Male, Female or Others");
    }),
  async (req, res) => {
    try {
      // console.log(body("first_name"));
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: formatErrors(errors.array()) });
      }

      const user = await User.create(req.body);

      return res.status(201).send(user);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  }
);

router.get("", async (req, res) => {
  try {
    const users = await User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
