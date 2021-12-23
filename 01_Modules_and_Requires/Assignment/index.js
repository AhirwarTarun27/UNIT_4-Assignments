const eventEmitter = require("events");
const { stdin, stdout } = require("process");
const newEvent = new eventEmitter();

const readline = require("readline");
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
});

const books = ["rich dad poor dad", "Harry Potter", "Wren & Martin"];
function showBook() {
  console.log(books.join("\n"));
}

newEvent.on("questions", () => {
  rl.question("1: Show all books. \n2: Add books. \n3: Exit.\n", (res) => {
    newEvent.emit("books", res);
  });
});

newEvent.on("books", (res) => {
  if (res == 1) {
    showBook();
    newEvent.emit("questions");
  } else if (res == 2) {
    rl.question("Enter new book\n", (bookname) => {
      books.push(bookname);
      newEvent.emit("questions");
    });
  } else if (res == 3) {
    rl.close();
  } else {
    console.log("Please enter a valid input");
    newEvent.emit("questions");
  }
});
rl.on("close", () => {
  process.exit(0);
});
newEvent.emit("questions");
