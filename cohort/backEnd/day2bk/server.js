const express = require("express");
const app = express(); //server created

app.get("/", (req, res) => {
  res.send("hello welcome to server");
});
app.get("/about", (req, res) => {
  res.send("this is about page!!!");
});
app.get("/home", (req, res) => {
  res.send("this is home page");
});

app.listen(3000); //server start ho gya
