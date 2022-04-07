const http = require("http");

// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.end('hello server1')
});

server.listen(3000, "0.0.0.0",() => {
  console.log('服务器启动成功')
});
