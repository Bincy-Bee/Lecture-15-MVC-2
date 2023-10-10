const { Router } = require("express");
const { home, signup, login } = require("../controller/user.controller");

const router = Router();

router.get("/", home);

router.post("/signup", signup);

router.post("/login", login)

module.exports={router}