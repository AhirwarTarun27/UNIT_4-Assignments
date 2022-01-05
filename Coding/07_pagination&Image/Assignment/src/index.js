const express = require("express");

const app = express();

const usercontroller = require("./controllers/user.controller");

const registrationcontroller = require("./controllers/registration.controller");

app.use(express.json());

app.use("/users", usercontroller);
app.use("/registrations", registrationcontroller);

module.exports = app;
