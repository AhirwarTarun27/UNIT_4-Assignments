const app = require("./index");
const connect = require("./configs/db");

app.listen(2121, async () => {
  await connect();
  console.log("server is listining to 2121");
});
