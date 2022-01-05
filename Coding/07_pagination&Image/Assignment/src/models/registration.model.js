const mongoose = require("mongoose");

const registrationschema = new mongoose.Schema(
  {
    age: { type: Number, required: true },
    city: { type: String, required: true },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("registration", registrationschema);
