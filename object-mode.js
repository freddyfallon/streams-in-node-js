const { Transform } = require('stream')
let size = 0
process.stdin
  .pipe(new Transform({ objectMode: true, transform: transform1 }))
  .pipe(new Transform({ objectMode: true, transform: transform2 }))

function transform1(chunk, encoding, next) {
  next(null, { length: chunk.length, total: (size += chunk.length) })
}

function transform2(chunk, encoding, next) {
  console.log(chunk)
  next()
}
