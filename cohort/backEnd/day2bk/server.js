const express = require("express");
const app = express();


app.get("/",(req,res)=>{
  res.send("hello welcome to my world.....")
})
app.get("/about",(req,res)=>{
  res.send("your are in the about page....");
})
app.get("/home",(req,res)=>{
  res.send("this is an home page....")
})

app.listen(3000,
  console.log("server is running on the port 3000")
)