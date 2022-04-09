const Koa = require("koa");
const multer = require("koa-multer");
const Router = require("koa-router");
const path = require("path");
const app = new Koa();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadRouter = new Router({ prefix: "/upload" });
const upload = multer({
  dest: "./uploads/",
  storage,
});

app.use(uploadRouter.routes());

uploadRouter.post("/avatar", upload.single("avatar"), (ctx, next) => {
  console.log(ctx.req.file);
  ctx.response.body = "上传头像成功";
});

app.listen(3000, () => {
  console.log("服务器启动成功");
});
