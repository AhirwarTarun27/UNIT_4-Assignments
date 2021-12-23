const impThird = require("./third");

let one = function fileTwoBoxOne() {
  console.log("I am the first function of the second file");
};

let two = function fileTwoBoxTwo() {
  impThird();
};

module.exports = { one, two };
