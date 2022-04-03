const path = require("path");

// 1. 获取路径信息
const filePath = "/User/ZimTang/abc.txt";
// /User/ZimTang/ 目录名
console.log(path.dirname(filePath));
// abc.txt 文件名
console.log(path.basename(filePath));
// .txt 后缀名
console.log(path.extname(filePath));

// 2.join路径拼接
const basePath = "/User/ZimTang";
const filename = "abc.txt";

const filePath1 = path.join(basePath, filename);
console.log(filePath1);

// 3.resolve拼接
// resolve会判断拼接的路径字符串中，是否有以/或./或../开头的路径
const otherpath = "/User/ZimTang";
const othername = "abc.txt";
const filePath2 = path.resolve(otherpath, othername);
console.log(filePath2);
