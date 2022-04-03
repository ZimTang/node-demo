// 减少使用硬编码，应该交给node接管
const path = require("path");

const basePath = "/User/ZimTang";
const filename = "abc.txt";

const filePath = path.resolve(basePath, filename);
console.log(filePath);
