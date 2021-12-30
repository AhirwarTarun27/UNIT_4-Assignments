const express = require("express");
const mongoose = require("mongoose");

const connect = () => {
  return mongoose.connect("mongodb://127.0.0.1:27017/books_database");
};

//add the following field for library
// 1)Section ( 1 Book can belong to only one section at a time but 1 section can have multiple books )
// 2)Books ( Book can be written by 1 or more author and also contains name, body )
// 3)Author ( an author can write one or more books and he also has first_name and last_name)
// 4)CheckedOut (one book can be checked out by 1 user at a time)

// Section schema and model

const sectionSchema = new mongoose.Schema(
  {
    sectionNo: { type: Number, required: true },
    book_ids: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "book",
        required: true,
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Section = mongoose.model("section", sectionSchema);

// Author schema and model
const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    middle_name: { type: String, required: false },
    last_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema);

// Book schema and model

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  author_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "author",
      required: true,
    },
  ],
  section_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "section",
    required: true,
  },
});

const Book = mongoose.model("book", bookSchema);

const app = express();

app.use(express.json());

// Section CRUD

app.post("/sections", async (req, res) => {
  try {
    const section = await Section.create(req.body);

    return res.status(201).send(section);
  } catch (err) {
    return res.status(500).send({
      error: err.message,
    });
  }
});

app.get("/sections", async (req, res) => {
  try {
    const sections = await Section.find().lean().exec();

    return res.send(sections);
  } catch (err) {
    return res.status(500).json({
      error: err.message,
    });
  }
});

// Book CRUD

app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return res.status(201).send(book);
  } catch (err) {
    return res.status(500).send({ error: err.message });
  }
});

// Author CRUD

app.post("/authors", async (req, res) => {
  try {
    const authors = await Author.create(req.body);

    return res.send(authors);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

app.get("/authors", async (req, res) => {
  try {
    const author = await Author.find().lean().exec();

    return res.send(users);
  } catch (err) {
    return res.send(500).json({
      error: err.message,
    });
  }
});

app.listen(2332, async () => {
  try {
    await connect();
    console.log("listining to port 2332");
  } catch (e) {
    console.log(e.message);
  }
});
