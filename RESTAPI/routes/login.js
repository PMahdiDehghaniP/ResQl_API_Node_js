const express = require("express");
const { handleLogin } = require("../controller/loginController");
const Loginrouter = express.Router();

Loginrouter.post("/login", handleLogin);

module.exports = Loginrouter;
