const http = require("http");
// 创建一个web服务器
const server = http.createServer((req, res) => {
  res.statusCode = 401;
  // res.setHeader("Content-type", "text/plain");
  // res.write("hello server1");
  res.writeHead(200,{
    'Content-type':'text/html'
  })

  res.end('<h2>hello</h2>');
});

server.listen(3000, "0.0.0.0", () => {
  console.log("服务器启动成功");
});
