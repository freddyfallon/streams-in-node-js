const { Transform } = require('stream')

function makeItUpperCase() {
  return new Transform({
    transform(chunk, encoding, next) {
      next(null, chunk.toString().toUpperCase())
    }
  })
}

process.stdin.pipe(makeItUpperCase()).pipe(process.stdout)
