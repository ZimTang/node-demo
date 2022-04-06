// 使用alloc创建buffer
const buffer = Buffer.alloc(8)
console.log(buffer)

// 十进制
buffer[0] = 88
// 十六进制
buffer[1] = 0x88
console.log(buffer)
