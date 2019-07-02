const fs = require('fs')

const w = fs.createWriteStream('fun.txt')

w.on('finish', () => console.log('done!'))

w.write('hello\n')
w.write('goodbye\n')

w.end()