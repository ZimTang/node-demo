const Koa = require("koa");
const Router = require("koa-router");
const app = new Koa();
const userRouter = new Router({ prefix: "/users" });

app.use(userRouter.routes());

userRouter.get("/:id", (ctx, next) => {
  console.log(ctx.request.query);
  console.log(ctx.request.params);
  ctx.response.body = { name: "1" };
});

app.listen(3000, () => {
  console.log("服务器启动成功");
});
