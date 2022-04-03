const fs = require("fs");

fs.open("./text.txt", (err, fd) => {
  if (err) {
    console.log(err);
    return;
  }
  // 通过描述符获取文件信息
  fs.fstat(fd, (err, info) => {
    console.log(info);
  });
});
