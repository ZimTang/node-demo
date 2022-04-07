const http = require("http");
const qs = require("querystring");

const server = http.createServer((req, res) => {
  if (req.url === "/upload") {
    if (req.method === "POST") {
      let body = "";
      req.on("data", (data) => {
        body += data;
      });

      req.on("end", () => {
        console.log(body);
        // 处理body
        // 1.获取image/png的位置
        const payload = qs.parse(body);
        res.end("文件上传成功");
      });
    }
  }
});

server.listen(3000);
