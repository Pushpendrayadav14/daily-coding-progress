const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookieParser());

//rewuire routes
const authRouter = require("./routers/auth.route");
const postRouter = require("./routers/post.route");
const userRouter = require("./routers/user.route");

//calling routes
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
app.use("/api/users", userRouter);

module.exports = app;
