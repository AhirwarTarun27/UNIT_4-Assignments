const express = require("express");

const app = express();

const productcontroller = require("./controllers/product.controller");
const usercontroller = require("./controllers/user.controller");

app.use(express.json());

app.use("/products", productcontroller);
app.use("/users", usercontroller);

module.exports = app;
