// Installation Package: npm install express-session --save-prod
// Installation Package: npm install cookie-parser --save-prod
// Installation Package: npm install body-parser --save-prod
// Installation Package: npm install multer --save-prod
// Installation Package: npm install cors --save-prod

var express = require("express");
var bodyparser = require("body-parser");
var cors = require("cors");

var app = express();
var cors_use = cors();

app.use(cors_use);
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.send("REST API....");
});

// let books = [];          // Used the "var","let" type.
// const books = [];          // Don't use the "const" type.

var books = [];

// Poste the JSON data into "books" variable.
app.post("/book", function (req, res) {
  const book = req.body;

  console.log(book);
  books.push(book);
  res.send("Books is here.");
});

// POST: 127.0.0.1:3000/book
// [
//   {
//       "name": "Muhammad Allah Rakha",
//       "age": 20
//   },
//   {
//       "name": "Hashim Raza",
//       "age": 25
//   }
// ]

// Console Output:
// [
//   { name: 'Muhammad Allah Rakha', age: 20 },
//   { name: 'Hashim Raza', age: 25 }
// ]

// Get the JSON data from "books" variable.
app.get("/book_show", (req, res) => {
  console.log(books);
  res.json(books);
});

// GET: 127.0.0.1:3000/book_show
// [
//   [
//     {
//       "name": "Muhammad Allah Rakha",
//       "age": 20
//     },
//     {
//       "name": "Hashim Raza",
//       "age": 25
//     }
//   ]
// ]

// Console Output:
// [
//   [
//     { name: 'Muhammad Allah Rakha', age: 20 },
//     { name: 'Hashim Raza', age: 25 }
//   ]
// ]

// Just for change the type of GET variable.
app.get("/:age", function (req, res) {
  let age = req.params.age;
  console.log(typeof age);
  let age_int = parseInt(age);
  console.log(typeof age_int);
  res.json(age);
});

// Retrive the signle name using "age".
app.get("/books/:age", function (req, res) {
  let age = req.params.age;
  // const age = parseInt(age_str); // Integer convert purpose....

  for (let i of books) {
    if (i.age === age) {
      console.log(i.age);
      res.json(i.age);
      return;
    }
  }

  res.status(404).send("Age not found.");
});

// GET: 127.0.0.1:3000/books/20
// {
//   "name": "Muhammad Allah Rakha",
//   "age": "20"
// }

// "20"
// Console Output: 20

// Deleting the name or age...
app.delete("/delete/:age", function (req, res) {
  let age = req.params.age;

  // Remove the item from the books array.
  books = books.filter((i) => {
    if (i.age !== age) {
      return true;
    }
    return false;
  });

  res.send("Age is deleted.");
});

// DELETE: 127.0.0.1:3000/delete/20
// {
//   "name": "Muhammad Allah Rakha",
//   "age": "20"
// }

// Console Output and Response:
// []
// []

// Editing the age or name..
app.post("/edit/:age", function (req, res) {
  let age = req.params.age;

  let data = req.body;

  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (book.age === age) {
      books[i] = data;
    }
  }

  res.send("Age is Edit/Update.");
});

//            Part #1
// POST: 127.0.0.1:3000/book
// {
//   "name": "Muhammad Allah Rakha",
//   "age": "20"
// }
// Console Output and Response:
//   [
//     { name: 'Muhammad Allah Rakha', age: 20 }
//   ]
// { name: 'Muhammad Allah Rakha', age: '20' }

//            Part #2
// POST: 127.0.0.1:3000/edit/20
// {
//   "age": "25"
// }
// Response:
// Age is Edit/Update.

//            Part #3
// GET: 127.0.0.1:3000/book_show
// Console Output and Response:
// [
//   {
//     "age": "25"
//   }
// ]
// [ { age: '25' } ]

app.listen(3000, () => {
  console.log("Localhost is open");
});
