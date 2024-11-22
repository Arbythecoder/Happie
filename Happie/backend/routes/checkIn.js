const express = require("express");
const { addCheckin, getCheckins } = require("../controllers/checkinController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, addCheckin);
router.get("/", authMiddleware, getCheckins);

module.exports = router;
