const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");
const User = require("../models/user.model");

const sendEmail = require("../utils/sendemail");

router.post("", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    const user = await User.findById(product.user_id).lean().exec();

    console.log(user.email);

    sendEmail({
      from: "admin@masai.com",
      to: user.email,
      subject: "New Product Created",
      text: "New Product Created",
      html: "<p>New Product Created</p>",
    });

    return res.status(201).send(product);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 5;

    const skip = (page - 1) * size;

    const products = await Product.find().skip(skip).limit(size).lean().exec();

    const totalProducts = Math.ceil((await Product.find().count()) / size);

    return res.status(200).send({ products, totalProducts });
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
