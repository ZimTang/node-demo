const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const multer = require("koa-multer");
const upload = multer();
const app = new Koa();

app.use(bodyParser());
app.use(upload.any());

app.use((ctx, next) => {
  console.log(ctx.request.body);
  // 等同于http中的request对象
  console.log(ctx.req.body);
  ctx.response.body = "hello world";
});

app.listen(3000, () => {
  console.log("服务器启动成功");
});
