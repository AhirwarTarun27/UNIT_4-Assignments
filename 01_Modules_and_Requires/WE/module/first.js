const second = require("./second");

let firstMiddleName = () => {
  console.log(`Tarun ${second.single()}`);
};
// firstMiddleName();

let lastName = () => {
  console.log("Ahirwar");
};

module.exports = { firstMiddleName, lastName };
