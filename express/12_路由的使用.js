const express = require("express");
const userRouter = require("./routers/users");

const app = express();

app.use("/users", userRouter);

app.listen(3000);
