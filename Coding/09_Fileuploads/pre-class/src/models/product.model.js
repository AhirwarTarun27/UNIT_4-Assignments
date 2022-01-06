const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: String, required: true },
    img_url: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const product = mongoose.model("product", productSchema);

module.exports = product;