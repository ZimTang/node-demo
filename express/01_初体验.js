const express = require("express");

const app = express();

app.get("/", (req, res, next) => {
  res.end("abc");
});

app.listen(3000, () => {
  console.log("开启了监听");
});
