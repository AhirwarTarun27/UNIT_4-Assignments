const express = require("express");

const usercontroller = require("./controllers/user.controller");
const studentcontroller = require("./controllers/student.controller");

const topicontroller = require("./controllers/topic.controller");

const evaluationcontroller = require("./controllers/evaluation.controller");

const app = express();

app.use(express.json());

app.use("/users", usercontroller);
app.use("/students", studentcontroller);
app.use("/topics", topicontroller);
app.use("/evaluations", evaluationcontroller);

module.exports = app;
