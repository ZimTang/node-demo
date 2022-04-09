const Koa = require("koa");
const app = new Koa();

app.use((ctx, next) => {
  ctx.body = "hello world";
  ctx.app.emit("error", new Error("你还没有登录"), ctx);
});

app.on("error", (err, ctx) => {
  ctx.status = 401;
  ctx.body = err.message;
});

app.listen(3000, () => {
  console.log("服务器启动成功");
});
