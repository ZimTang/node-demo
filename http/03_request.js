const http = require("http");
const url = require("url");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  // 最基本的使用方式
  const { pathname, query } = url.parse(req.url);
  if (pathname === "/login") {
    const { username, password } = qs.parse(query);
    console.log(username, password);
  }
  res.end("server");
});

server.listen(3000, () => {
  console.log("服务器启动了");
});
