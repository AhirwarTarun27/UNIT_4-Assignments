const express = require("express");

const usercontroller = require("./controllers/user.controller");
const studentcontroller = require("./controllers/student.controller");

const app = express();

app.use(express.json());

app.use(usercontroller);
app.use(studentcontroller);

module.exports = app;
