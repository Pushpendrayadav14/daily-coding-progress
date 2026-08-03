const express = require("express");
const authRouter = require("./routers/auth.route");
const cookieParser = require("cookie-parser");
const app = express();

const postRouter = require("./routers/post.route");

app.use(express.json());
app.use("/api/auth", authRouter);
app.use(cookieParser());

app.use("/api/post", postRouter);

module.exports = app;
