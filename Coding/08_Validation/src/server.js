const express = require("express");

const connect = require("./configs/db");

const app = express();

const userSchema = require("./controllers/user.controller");

app.use(express.json());

app.use("/users", userSchema);

const start = async () => {
  await connect();

  app.listen(2345, () => {
    console.log("connected to 2345");
  });
};

module.exports = start;
