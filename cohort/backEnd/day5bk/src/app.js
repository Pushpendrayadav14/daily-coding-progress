// server create kerna
// server ko config kerna

const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();

app.use(express.json()); //medileware use kara

//post /notes request body me title and description dena hai
app.post("/notes", async (req, res) => {
  const { title, description, age } = req.body;
  const note = await noteModel.create({ title, description, age });
  res.status(201).json({
    message: "note created successfully",
    note,
  });
});

//get /notes
//fetch all the notes from the database and return them in the response
app.get("/notes", async (req, res) => {
  const notes = await noteModel.find();
  res.status(200).json({
    message: "notes fetch successfully",
    notes,
  });
});
module.exports = app;
 