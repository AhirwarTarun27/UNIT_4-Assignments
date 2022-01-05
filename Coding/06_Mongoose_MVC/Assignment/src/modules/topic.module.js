const mongoose = require("mongoose");

const topicschema = new mongoose.Schema(
  {
    topic_name: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

module.exports = mongoose.model("topic", topicschema);
