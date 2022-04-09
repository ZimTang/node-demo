const express = require("express");
const app = express();

const USER_DOES_NOT_EXITS = "user does not exits";
const USER_ALREADY_EXITS = "user already exits";

app.post("/login", (req, res, next) => {
  // next(error)
  next(new Error(USER_DOES_NOT_EXITS));
});

// 处理错误
app.use((err, req, res, next) => {
  let status = 400;
  let message = "";
  switch (err.message) {
    case USER_DOES_NOT_EXITS:
      status = 400;
      message = "username does not exits";
      break;
    default:
      break;
  }
  res.status(status);
  res.json({
    errCode: status,
    errMessage: message,
  });
});

app.listen(3000);
