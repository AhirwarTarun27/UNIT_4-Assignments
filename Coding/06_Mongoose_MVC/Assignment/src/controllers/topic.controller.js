const Topic = require("../modules/topic.module");

const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const topic = await Topic.create(req.body);

    return res.status(201).send(topic);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const topics = await Topic.find().lean().exec();

    return res.status(201).send(topics);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
