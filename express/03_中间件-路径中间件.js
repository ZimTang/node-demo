const express = require("express");

const app = express();

// 普通中间件
app.use((req, res, next) => {
  console.log("common middleware01");
  next();
});

// 路径匹配中间件
app.use("/home", (req, res, next) => {
  console.log("home middleware01");
  next();
});

// 中间插入一个普通中间件
app.use((req, res, next) => {
  console.log("common middleware02");
  next();
});

app.use("/home", (req, res, next) => {
  console.log("home middleware02");
  res.end("home middleware");
});

app.listen(3000);
