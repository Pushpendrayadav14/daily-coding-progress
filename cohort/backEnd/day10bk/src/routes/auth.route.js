const express = require("express");
const authRouter = express.Router();

const userModel = require("../models/auth.model");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");

//Post /api/auth/register
authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isuserExist = await userModel.findOne({ email });
  if (isuserExist) {
    return res.status(409).json({
      message: "email already exists...",
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
    { expiresIn: "2h" },
  );
  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user registered successfully...",
  });
});

//get /api/auth/get-me
authRouter.get("/get-me", async (req, res) => {
  const token = req.cookies.jwt_token;
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  const user = await userModel.findById(decoded.id);
  res.json({
    name: user.name,
    email: user.email,
  });
});

//post /api/auth/login
authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = crypto
    .createHash("md5")
    .update(password)
    .digest("hex");
  const user = await userModel.findOne({ email, password: hashedPassword });

  if (!user || user.password !== hashedPassword) {
    return res.status(401).json({
      message: "invalid email or password...",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2h" },
  );

  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "user logged in successfully....",
  });
});

module.exports = authRouter;
