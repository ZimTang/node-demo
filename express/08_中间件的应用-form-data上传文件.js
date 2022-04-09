const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();

app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  // dest: "./uploads",
  // 自定义存储信息
  storage,
});

app.post("/login", upload.any(), (req, res, next) => {
  res.end("用户登录成功");
});

app.post("/upload", upload.single("file"), (req, res, next) => {
  console.log(req.file);
  res.end("文件上传成功");
});

app.listen("3000", () => {
  console.log("服务器启动成功");
});
