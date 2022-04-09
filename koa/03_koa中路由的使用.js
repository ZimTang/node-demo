const Koa = require("koa");
const app = new Koa();
const userRouter = require("./routers/user");

app.use((ctx, next) => {
  next();
});

app.use(userRouter.routes());
// 用于判断某一个method是否支持
app.use(userRouter.allowedMethods());

app.listen(3000, () => {
  console.log("服务器启动成功");
});
