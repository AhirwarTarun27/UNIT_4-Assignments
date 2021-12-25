const express = require("express");
const app = express();

const bookData = require("./data");

app.get("/", logger, (req, res) => {
  return res.send(bookData);
});

function logger(req, res, stop) {
  req = bookData;
  stop();
}

app.listen(2333, () => {
  console.log("you are in the 2333 port");
});
