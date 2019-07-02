const concat = require('concat-stream')

process.stdin.pipe(concat({encoding: 'string'}, function makeUpperCase(body) {
  console.log(body.toUpperCase())
}))