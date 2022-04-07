const express = require("express");

const app = express();

app.use(express.json());
// extended
// true: 对urlencoded解析时，使用的是第三方库：qs
// false: 对urlencoded解析时，使用的是node内置的querystring
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   if (req.headers["content-type"] === "application/json") {
//     req.on("data", (data) => {
//       const info = JSON.parse(data.toString());
//       req.body = info;
//     });

//     req.on("end", () => {
//       next();
//     });
//   } else {
//     next();
//   }
// });

app.get("/home", (req, res, next) => {
  console.log(req.body);
  res.end("hello");
});

app.post("/login", (req, res, next) => {
  console.log(req.body);
  res.end("login");
});

app.listen(3000);
