const fs = require("fs");

// 传统的方式
// fs.writeFile("./foo.txt", "hello", (err) => {
//   console.log(err);
// });

// Stream的写入方式
const writer = fs.createWriteStream("./foo.txt", { flags: "a", start: 4 });

writer.write("你好啊", (err) => {
  console.log(err);
  console.log(err);
});

writer.write("李银河", (err) => {
  console.log(err);
});

// 内部做了两件事
// writer.write("hello world")
// close()
writer.end("hello world");

writer.on("close", () => {
  console.log("文件被关闭");
});
