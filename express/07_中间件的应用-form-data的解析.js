const express = require("express");
const multer = require("multer");

const app = express();

app.use(express.json());

const upload = multer();
// 解析所有格式的数据
app.use(upload.any());

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("用户登录成功");
});

app.listen("3000", () => {
  console.log("服务器启动成功");
});
