// Madison Kendall note taker pro app code
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./db/db");

// tells node that we are creating an express server
const app = express();

// setting initial port to 3000
const PORT = process.env.PORT || 3000;

// app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlendcoded({
  extended: true
}));
app.use(express.json());

app.get("/", function(req, res) {
  res.sendFile(__dirname, "/public/index.html");
  console.log("Hi");
});

app.get("/notes", function(req, res) {
  res.sendFile(__dirname, "/public/notes.html")
})

app.route("/api/notes")
  .get(function(req, res) {
    res.json(database);
  })

// to add a new note to json db file
  .post(function(req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    let newNote = req.body;

  })


app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});
