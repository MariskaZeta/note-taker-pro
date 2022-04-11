// Madison Kendall note taker pro app code
const express = require("express");
const fs = require("fs");
const path = require("path");
const database = require("./Develop/db/db");

// tells node that we are creating an express server
const app = express();

// setting initial port to 3000
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

// route to notes html
app.get("/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.route("/api/notes")
// grab the notes list from the database
  .get(function(req, res) {
    res.json(database);
  })

  .post(function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    let newNote = req.body;

    let highestId = 99;
    for(let i = 0; i < database.length; i++) {
      let individualNote = database[i];
      if(individualNote.id > highestId) {
        highestId = individualNote.id;
      }
    }
    newNote.id = highestId + 1;
    database.push(newNote)

    fs.writeFile(jsonFilePath, JSON.stringify(database), function(err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("The note has been written.");
      }
    });
    // returns the new note
    res.json(newNote);
  });

  app.delete("/api/notes/:id", function (req, res) {
    let jsonFilePath = path.join(__dirname, "/db/db.json");
    for(let i = 0; i < database.length; i++) {
      if(database[i].id === req.params.id) {
        database.splice(i, 1);
        break;
      }
    }
    fs.writeFileSync(jsonFilePath, JSON.stringify(database), function(err) {
      if (err) {
        return console.log(err);
      } else {
        console.log("The note has been deleted.");
      }
    });
    res.json(database);
  });



app.listen(PORT, function() {
  console.log(`App listening on PORT: ${PORT}`);
});
