const Evaluation = require("../modules/evaluation.model");

const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const evaluation = await Evaluation.create(req.body);
    return res.status(201).send(evaluation);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    console.log(Evaluation);
    const evaluations = await Evaluation.find()
      .populate({ path: "user_id", select: { first_name: 1, last_name: 1 } })
      .lean()
      .exec();
    return res.status(200).send(evaluations);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
