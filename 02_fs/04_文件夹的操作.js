const fs = require("fs");
const path = require("path");

// 1.创建文件夹
const dirname = "./demo";
if (!fs.existsSync(dirname)) {
  fs.mkdir(dirname, (err) => {
    console.log(err);
  });
}

// 2.读取文件夹中的所有文件
// fs.readdir(dirname, (err, files) => {
//   console.log(files);
// });

function getFiles(dirname) {
  fs.readdir(dirname, { withFileTypes: true }, (err, files) => {
    for (let file of files) {
      if (file.isDirectory()) {
        const filePath = path.resolve(dirname, file.name);
        getFiles(filePath);
      } else {
        console.log(file.name);
      }
    }
  });
}

getFiles(dirname);

// 3.重命名
fs.rename("./demo", "./james", (err) => {
  console.log(err);
});
