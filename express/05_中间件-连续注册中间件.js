const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("common middleware01");
  next();
});

app.get(
  "/home",
  (req, res, next) => {
    console.log("home middleware01");
    next();
  },
  (req, res, next) => {
    console.log("home middleware02");
    next();
  },
  (req, res, next) => {
    console.log("home middleware03");
    next();
  },
  (req, res, next) => {
    console.log("home middleware04");
    res.end("home page");
  }
);

app.listen(3000);
