const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.json(["abc", "cba", "aaa"]);
});

router.post("/", (req, res, next) => {
  res.json("create user");
});

router.get("/:id", (req, res, next) => {
  res.json(`id为${req.params.id}用户的信息`);
});

module.exports = router;
