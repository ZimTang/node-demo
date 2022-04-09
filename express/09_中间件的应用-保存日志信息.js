const express = require("express");
const morgan = require("morgan");
const app = express();

const fs = require("fs");

const writeStream = fs.createWriteStream("./logs/access.log", {
  flags: "a+",
});

app.use(morgan("combined", { stream: writeStream }));

app.get("/home", (req, res, next) => {
  res.end("hello world");
});

app.listen("3000", () => {
  console.log("服务器启动成功");
});
