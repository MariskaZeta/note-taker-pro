const fs = require("fs");
const path = require("path");

// function to create new notes, passing note and notesArray as parameters
function createNewNotes (note, notesArray) {
  const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

  jsonData.notes.push(note);

  fs.writeFileSync(
    path.join(__dirname, '../db/db.json'),
    JSON.stringify({ notes: jsonData.notes }, null, 2)
  );

  return note;
}

// function to delete notes passing id as a parameter
function deleteById(id){

const jsonData = JSON.parse(fs.readFileSync(path.join(__dirname, '../db/db.json')));

newNotesArray = jsonData.notes.filter(note => note.id !== id);

fs.writeFileSync(
  path.join(__dirname, '../db/db.json'),
  JSON.stringify({ notes: newNotesArray }, null, 2)
);

}

module.exports = { createNewNotes, deleteById };
