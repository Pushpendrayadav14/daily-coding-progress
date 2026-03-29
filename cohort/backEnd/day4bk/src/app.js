// server create kerna
// server ko config kerna
const express = require("express");
const app = express(); //server create ho jata hai

app.use(express.json()); //json data ko parse karne ke liye middleware use karna

const notes = [];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello world",
  });
});

/* 
POST /notes(api )
*/
app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);

  // console.log(notes);

  res.status(201).json({
    message: "note created successfully",
  });
});

/*delete notes*/
//use params to get the index of the note to be deleted

app.delete("/notes/:index", (req, res) => {
  delete notes[req.params.index]; //delete the note at the specified index
  res.status(204).json({
    message: "note deleted successfully",
  });
});
/*PATCH /notes/:index*/
app.patch("/notes/:index", (req, res) => {
  notes[req.params.index].description = req.body.description; //update the description of the note at the specified index
  res.status(200).json({
    message: "note updated successfully",
  });
});

app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
  });
});

module.exports = app; //server export karna taki use kar sakein
