const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.post("", async (req, res) => {
  try {
    const user = await User.create(req.body);

    return res.status(201).send(user);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 2;

    const skip = (page - 1) / size;

    const users = await User.find().skip(skip).limit(size).lean().exec();

    const totalPages = Math.ceil((await User.find().count()) / size);

    return res.status(200).send({ users, totalPages });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
