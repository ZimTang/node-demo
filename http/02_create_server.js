const http = require("http");

const server1 = http.createServer((req, res) => {
  res.end("server1");
});

// 另一种方式
const server2 = new http.Server((req, res) => {
  console.log(req.url);
  console.log(req.headers);
  console.log(req.method);
  res.end("server2");
});

server1.listen(3001);
server2.listen(3002);
