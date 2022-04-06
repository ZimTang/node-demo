const message = "你好啊";

const buffer = Buffer.from(message);

console.log(buffer);
// 对字节进行解码：utf8
console.log(buffer.toString());

// 2.编码使用utf16le，解码使用utf8
const buffer2 = Buffer.from(message, "utf16le");
console.log(buffer2);
// 解码失败
console.log(buffer2.toString());
