const fs = require("fs");
// 流的方式读取
const reader = fs.createReadStream("./foo.txt", {
  start: 3,
  end: 6,
  highWaterMark: 1,
});

// reader是一个stream，内部会自动发射一个data事件
reader.on("data", (data) => {
  console.log(data);
  reader.pause();
  // 每隔一秒读取
  setTimeout(() => {
    // 恢复
    reader.resume();
  }, 1000);
});

// 监听读取开始
reader.on("open", () => {
  console.log("文件被打开");
});

// 监听读取结束
reader.on("close", () => {
  console.log("文件被关闭");
});
