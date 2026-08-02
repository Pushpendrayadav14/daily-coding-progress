const express = require("express");
const authContoller = require("../controllers/auth.controller");

const authRouter = express.Router();

//post //api/auth.register
authRouter.post("/register", authContoller.registerController);

//post /api/auth/login
authRouter.post("/login", authContoller.loginController);

module.exports = authRouter;
