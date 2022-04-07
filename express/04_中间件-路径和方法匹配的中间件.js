const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("common middleware01");
  next();
});

app.get("/home", (req, res, next) => {
  console.log("home path and method middleware01");
});

app.post("/login", (req, res, next) => {
  console.log("login path and method middleware01");
});

app.listen(3000);
