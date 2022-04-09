const express = require("express");
const app = express();

app.get("/products/:id/:name", (req, res, next) => {
  console.log(req.params);
  res.end("hello world");
});

app.get("/login", (req, res, next) => {
  console.log(req.query);
  res.end("hello world");
});

app.listen("3000", () => {
  console.log("服务器启动成功");
});
