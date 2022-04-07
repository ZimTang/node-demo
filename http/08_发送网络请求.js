const http = require("http");

// 发送get请求
http.get("http://localhost:3000", (res) => {
  console.log(res);
  res.on("data", (chunk) => {
    console.log(chunk.toString());
  });
});

// 发送网络请求
const req = http.request(
  {
    host: "localhost",
    port: 3000,
    method: "GET",
  },
  (res) => {
    res.on("data", (data) => {
      console.log(data);
    });

    res.on("end", () => {
      console.log("获取到了所有的结果");
    });
  }
);

req.end();
