const fs = require('fs')
// sharp库的导入
const sharp = reuire('sharp')
// 读取文本文件
fs.readFile('./foo.txt',{encoding:'utf8'},(err,data) => {
    console.log(data)
})

// 不传字符编码，读出来的是buffer
fs.readFile('./foo.txt',(err,data) => {
    console.log(data)
    console.log(data.toString())
})

// 读取图片文件
fs.readFile('./bar.png',(err,data) => {
    console.log(data)
})

sharp('./bar.png').resize(200,200).toFile('./baz.png')
sharp('./bar.txt').resize(300,300).toBuffer().then(data => {
    fs.writeFile('./bax.png',data,err => {
        console.log(err)
    } )
})
