const express = require("express");

const router = express.Router();

const Reg = require("../models/registration.model");

const sendEmail = require("../utils/sendEmail");

const User = require("../models/user.model");

router.post("", async (req, res) => {
  try {
    const reg = await Reg.create(req.body);
    const user = await User.findById(reg.user_id).lean().exec();
    console.log(user.email);

    sendEmail({
      from: "tarunahirwar@masai.com",
      to: user.email,
      subject: `Welcome to ABC system ${user.first_name} ${user.last_name}`,
      text: `Hi ${user.first_name}, Please confirm your email address`,
      html: "<p>HTML version of the message</p>",
    });

    sendEmail({
      from: "admin@masai.com",
      to: user.admin,
      subject: ` ${user.first_name} ${user.last_name} has registered with us`,
      text: `Please welcome ${user.first_name} ${user.last_name}`,
      html: "<p>HTML version of the message</p>",
    });

    return res.status(201).send(reg);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

router.get("", async (req, res) => {
  try {
    const regs = await Reg.find().lean().exec();

    return res.status(200).send(regs);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

module.exports = router;
