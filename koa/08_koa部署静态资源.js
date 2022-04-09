const Koa = require("koa");
const app = new Koa();

const koaStatic = require("koa-static");

app.use(koaStatic("./static"));

app.use((ctx, next) => {
  // 设置响应状态码
  // ctx.status = 200
  ctx.body = "hello world";
});

app.listen(3000, () => {
  console.log("服务器启动成功");
});
