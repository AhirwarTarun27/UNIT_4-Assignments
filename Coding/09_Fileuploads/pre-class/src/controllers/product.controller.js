const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  res.send("Single");
});

router.post("/multiple", async (req, res) => {
  res.send("Multiple");
});

module.exports = router;
