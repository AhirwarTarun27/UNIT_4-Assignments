const app = require("./index");

const connect = require("./configs/db");

app.listen(2222, async () => {
  try {
    await connect();
    console.log("listining to the port 2222");
  } catch (e) {
    console.log(e.message);
  }
});
