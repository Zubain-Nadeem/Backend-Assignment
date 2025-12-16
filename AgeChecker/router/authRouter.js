const express = require("express");
const router = express.Router();
const ageChecker = require("../middleware/ageChecker");
const checkAge = require("../controller/auth");

router.post("/check", ageChecker, checkAge);

module.exports = router;
