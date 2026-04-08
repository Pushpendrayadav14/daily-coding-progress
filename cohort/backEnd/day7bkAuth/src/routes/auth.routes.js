const express = require("express");
const userModel = require("../model/user.model");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

// /api/auth/register
authRouter.post("/register", async (req, res) => {
  const { userName, email, password } = req.body;

  const userAlreadyExist = await userModel.findOne({ email });
  if (userAlreadyExist) {
    return res.status(400).json({
      message: "user aleardy exist with this email",
    });
  }

  const user = await userModel.create({
    userName,
    email,
    password,
  });

  const token = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user created Successfully",
    user,
    token,
  });
});

// api/auth/protected
authRouter.post("/protected", (req, res) => {
  console.log(req.cookies);

  res.status(200).json({
    message: "you have access to protected route",
  });
});

module.exports = authRouter;
