const express = require("express");
const app = express();

// app.use(logger);
app.use(onemore);

app.get("/", logger("Ahirwar"), (req, res) => {
  return res.send({ name: req.name });
});

app.get("/tarun", (req, res) => {
  return res.send("All users");
});

function logger(data) {
  return function (req, res, done) {
    req.name = "Instructor";
    console.log(`Tarun ${data}`);
    console.log(`Umang ${data}`);
    done();
  };
}

function onemore(req, res, done) {
  req.name = "OneMoreInstructor";
  console.log("OneMoreTarun");
  console.log("OneMoreUmang");
  done();
}

app.listen(2332, () => {
  console.log("listining to the port 2332");
});
