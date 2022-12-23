const express = require("express");
const registerUser = require("../controller/userController");

const router = express.Router();
console.log("lksdfklsdfkslk");
router.post("/user", registerUser);

module.exports = router;
