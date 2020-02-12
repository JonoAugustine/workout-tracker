const express = require("express");
const router = express.Router();
const { join } = require("path");

/** @returns {string} The full path to the file in the public dir */
const public = path => join(__dirname, "..", "..", "public", path || "");

router
  .use(express.static(public()))
  .get("/", async (_, res) => res.sendFile(public("index.html")))
  .get("/exercise", async (_, res) => res.sendFile(public("exercise.html")))
  .get("/stats", async (_, res) => res.sendFile(public("stats.html")));

module.exports = router;
