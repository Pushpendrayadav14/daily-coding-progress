import { Router } from "express";
const authController = require("../controllers/auth.controller");

const router = Router();

router.post("/register", authController.registerUser);

module.exports = router;
