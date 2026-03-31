//server ko setup karne ke liye or create karne ke liye
//server on configuration ke liye
const express = require("express");
const app = express();
const noteModel = require("./models/note.model");
const cors = require("cors");
const path = require("path");


app.use(cors());
app.use(express.json());
app.use(express.static("./public"));


//post /api/notes reuest ke liye
//req.body {name , title ,age }
//create new note and save in database

app.post("/api/notes", async (req, res) => {
  const { name, title, age } = req.body;
  const data = await noteModel.create({ name, title, age });
  res.status(201).json({
    message: "note created successfully",
    data,
  });
});

//get /api/notes request ke liye data fetch
//database se data fetch karna ke liye

app.get("/api/notes", async (req, res) => {
  const datas = await noteModel.find();
  res.status(200).json({
    message: "notes fetched data successfullt",
    datas,
  });
});

//delete /api/notes/:id
//delete note from data base by id using req.params.id
app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete(id);

  res.status(200).json({
    message: "note deleted successfully",
  });
});

//PATCH /api/notes/:id
//update note from database by id using req.params.id
app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { name, title, age } = req.body;
  const updatedNote = await noteModel.findByIdAndUpdate(
    id,
    { name, title, age },
    { new: true },
  ); //updated data return karega
  res.status(200).json({
    message: "note updated successfully",
    datas: updatedNote,
  });
});

// * worng api ke liye
app.use("*name",(req,res)=>{
  res.sendFile(path.join(__dirname,"..","./public/index.html"));

})


module.exports = app;
