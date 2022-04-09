const express = require("express");
const app = express();

app.get("/home", (req, res, next) => {
  // 第一种方式 设置内容
  // res.type("application/json");
  // res.end(
  //   JSON.stringify({
  //     name: "1",
  //     age: 2,
  //   })
  // );

  // 设置响应码
  res.status(204);
  // 第二种方式 设置内容
  res.json({
    name: "1",
    age: 2,
  });
});

app.listen("3000", () => {
  console.log("服务器启动成功");
});
