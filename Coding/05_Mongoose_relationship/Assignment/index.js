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
    language: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Section = mongoose.model("section", sectionSchema);

//Author schema

const authorSchema = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Author = mongoose.model("author", authorSchema);

// Books schema

const booksSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
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
    checked: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Book = mongoose.model("book", booksSchema);

const app = express();

app.use(express.json());

//CURD for section

app.post("/sections", async (req, res) => {
  try {
    const section = await Section.create(req.body);

    return res.status(201).send(section);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get("/sections", async (req, res) => {
  try {
    const sections = await Section.find().lean().exec();

    return res.status(201).send(sections);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// app.get("/sections/:id", async (req, res) => {
//   try {
//     const section = await Section.findById(req.params.id).populate({path: ""}) lean().exec();

//     return res.status(201).send(section);
//   } catch (err) {
//     return res.status(500).send(err.message);
//   }
// });

// CRUD for books

app.get("/books", async (req, res) => {
  try {
    const books = await Book.find()
      .populate({ path: "author_id", select: { first_name: 1, last_name: 1 } })
      .populate({ path: "section_id", select: { language: 1 } })
      .lean()
      .exec();

    return res.status(201).send(books);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.post("/books", async (req, res) => {
  try {
    const book = await Book.create(req.body);

    return res.status(201).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.delete("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id).lean().exec();

    return res.status(201).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.patch("/books/:id", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    })
      .lean()
      .exec();

    return res.status(201).send(book);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

//CRUD for Author

app.post("/authors", async (req, res) => {
  try {
    const author = await Author.create(req.body);

    return res.status(201).send(author);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

app.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find().lean().exec();

    return res.status(201).send(authors);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// finding the book that are checkedout

app.get("/checkedout", async (req, res) => {
  try {
    const check = await Book.find({ checked: { $eq: false } })
      .lean()
      .exec();

    return res.status(201).send(check);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// finding all books written by an author

app.get("/booksbyauthor/:id", async (req, res) => {
  try {
    const booksbyauthor = await Book.find({ author_id: { $eq: req.params.id } })
      .populate({ path: "author_id", select: { first_name: 1, last_name: 1 } })
      .populate({ path: "section_id", select: { language: 1 } })
      .lean()
      .exec();

    return res.status(201).send(booksbyauthor);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// finding books in a section

app.get("/sectionbooks/:id", async (req, res) => {
  try {
    const sectionbooks = await Book.find({ section_id: { $eq: req.params.id } })
      .lean()
      .exec();

    return res.status(201).send(sectionbooks);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// finding books which is not checked out

app.get("/notcheckedout", async (req, res) => {
  try {
    const notcheckedout = await Book.find({ checked: { $eq: false } })
      .lean()
      .exec();

    return res.status(201).send(notcheckedout);
  } catch (err) {
    return res.status(500).send(err.message);
  }
});

// finding books of one author inside a section-----

app.get("/booksbyauthor/:id1/:id2", async (req, res) => {
  try {
    const booksbyauthor = await Book.find({
      $and: [
        { section_id: { $eq: req.params.id1 } },
        { author_id: { $eq: req.params.id2 } },
      ],
    })
      .lean()
      .exec();

    return res.status(201).send(booksbyauthor);
  } catch (err) {
    return res.status(500).send(err.message);
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
