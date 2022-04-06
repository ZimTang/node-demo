const fs = require('fs')

const reader = fs.createReadStream('./foo.txt')
const writer = fs.createWriteStream('./foz.txt')

reader.pipe(writer)
