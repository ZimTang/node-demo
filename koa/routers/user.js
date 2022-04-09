const Router = require("koa-router");
const router = new Router({ prefix: "/users" });

router.get("/", (ctx, next) => {
  ctx.response.body = "get user request";
});

module.exports = router;
