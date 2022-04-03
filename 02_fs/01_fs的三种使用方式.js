const fs = require("fs");

// 读取文件的信息
const filePath = "text.txt";

// 1.方式一：同步操作
const info = fs.statSync(filePath);
// console.log("后续代码阻塞");
// console.log(info);

// 2.方式二：异步操作
fs.stat(filePath, (err, info) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(info);
});

console.log("后续代码不会阻塞");
console.log(info);

// 3.方式三：promise的方式
fs.promises
  .stat(filePath)
  .then((info) => {
    console.log(info);
  })
  .catch((err) => {
    console.log(err);
  });
