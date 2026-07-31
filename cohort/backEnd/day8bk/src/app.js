const express = require("express");
const noteModel = require("./models/notes.model");
const app = express();

app.use(express.json());

// post /notes
// req.body =>{title,description}

app.post("/notes", async (req, res) => {
  const { title, description, age } = req.body;
  const note = await noteModel.create({
    title,
    description,
    age,
  });
  res.status(201).json({
    message: "note is created successfully....",
    note,
  });
});

// get /notes
// fetch all notes data

app.get("/notes", async (req, res) => {
  const note = await noteModel.find();

  //.find methode hmesha array of objects ke form me data return karti hai ...

  res.status(200).json({
    message: "note data is fetched successfully.....",
    note,
  });
});

module.exports = app;
