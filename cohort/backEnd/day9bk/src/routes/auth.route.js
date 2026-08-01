const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRouter = express.Router();

// /api/auth/register

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isuserExist = await userModel.findOne({ email });
  if (isuserExist) {
    return res.status(409).json({
      message: "Email already exists...",
    });
  }

  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");

  const user = await userModel.create({
    name,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user Registration successfully...",
    user,
    token,
  });
});

// POST /api/auth/protected
authRouter.post("/protected", async (req, res) => {
  console.log(req.cookies);
  res.status(200).json({
    message: "Protected route accessed successfully....",
  });
});

// POST /api/auth/login

//controller for login route
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
  const user = await userModel.findOne({ email, password: hashedPassword });

  if (!user || user.password !== hashedPassword) {
    return res.status(401).json({
      message: "Invalid email or password",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );
  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "user Login successfully....",
  });
});

module.exports = authRouter;
