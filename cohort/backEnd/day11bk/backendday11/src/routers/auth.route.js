const express = require("express");
const authContoller = require("../controllers/auth.controller");
const identifyUser = require("../middlewares/auth.middleware");

const authRouter = express.Router();

//post //api/auth.register
authRouter.post("/register", authContoller.registerController);

//post /api/auth/login
authRouter.post("/login", authContoller.loginController);

//GET /api/auth/get-me
//get the current loged in user information
authRouter.get("/get-me", identifyUser, authContoller.getMeController);

module.exports = authRouter;
