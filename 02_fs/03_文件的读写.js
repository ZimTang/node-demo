const fs = require("fs");

const content = "你好啊";
// 1.文件的写入
// flag的值有很多
fs.writeFile("./text.txt", content, { flag: "a" }, (err) => {
  console.log(err);
});

// 2.文件的读取
fs.readFile("./text.txt", { encoding: "utf-8" }, (err, data) => {
  console.log(data);
});
