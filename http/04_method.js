const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // 最基本的使用方式
  const { pathname } = url.parse(req.url);
  if (pathname === "/login") {
    if (req.method === "POST") {
      // 拿到body中的数据
      req.setEncoding("utf8");
      req.on("data", (data) => {
        const { username, password } = JSON.parse(data);
        console.log(username, password);
      });
    }
  }
  res.end("server");
});

server.listen(3000, () => {
  console.log("服务器启动了");
});
