const express = require("express");

const app = express();

// 编写普通的中间件
// use 注册一个中间件(回调函数)
app.use((req, res, next) => {
  console.log("注册了第一个普通的中间件");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第二个普通的中间件");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第三个普通的中间件");
  res.end("hello");
});

app.listen(3000);
