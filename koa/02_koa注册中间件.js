const Koa = require("koa");
const app = new Koa();

// 注册中间件
app.use((ctx, next) => {
  ctx.response.body = "hello world";
});

// 没有提供下面这种方式
// app.get()
// app.use("/home", (ctx, next) => {});
// app.use(
//   (ctx, next) => {},
//   (ctx, next) => {}
// );

app.listen(3000, () => {
  console.log("服务器启动成功");
});
