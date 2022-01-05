const mongoose = require("mongoose");

const evalschema = new mongoose.Schema(
  {
    evaluation_topic: { type: mongoose.Schema.Types.ObjectId, required: true },
    evaluation_score: { type: Number, required: true, default: 0 },
    date_of_eval: { type: Date, required: true },
    instructor: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("evaluation", evalschema);
