const express = require("express");

const connect = require("./config/db");

const productController = require("./controllers/product.controller");

const app = express();

app.use(express.json());

app.use("./products", productController);

app.listen(2323, async () => {
  await connect();

  console.log("server connected to 2323");
});
