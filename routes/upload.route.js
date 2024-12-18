require("dotenv").config();

const express = require("express");
const passport = require("passport");

const uploadController = require("./../controllers/upload.controller");
const s3Uploader = require("./../middleware/s3uploader.js");

const router = express.Router();
const authGuard = passport.authenticate("jwt", { session: false });

router.post("/", authGuard, s3Uploader.single("image"), uploadController.upload);

module.exports = router;
