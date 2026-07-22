const express = require("express");
const app = express();

app.use(express.json());

const note = [];

app.post("/note", (req, res) => {
  console.log(req.body);
  note.push(req.body);
  res.send("method is call ");
});

app.get("/note",(req,res)=>{
  res.send(note);
})

app.listen(3000, () => {
  console.log("server is running on the port 3000...........");
});
