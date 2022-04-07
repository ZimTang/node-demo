const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
  if (req.url === "/upload") {
    if (req.method === "POST") {
      const fileWriter = fs.createWriteStream("./foo.png", { flags: "a+" });
      req.on("data", (data) => {
        // 因为data里面还有其他信息，所以存储下的文件是打不开的
        fileWriter.write(data);
      });
    }

    req.on("end", () => {
      res.end("文件上传成功");
    });
  }
}, 3000);
