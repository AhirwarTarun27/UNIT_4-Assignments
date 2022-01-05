const Student = require("../modules/student.module");

const express = require("express");
const { builtinModules } = require("module");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const student = await Student.create(req.body);

    return res.status(201).send(student);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const students = await Student.find().lean().exec();

    return res.status(201).send(students);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const students = await Student.findById(req.params.id).lean().exec();

    return res.status(201).send(students);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
