const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

const { profilePic } = require("../middlewares/profile");

router.post("/profile", profilePic("profile_pic"), async (req, res) => {
  try {
    const user = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      profile_pic: req.file.path,
    });

    return res.status(201).send({ user });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const users = User.find().lean().exec();

    return res.status(200).send(users);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
