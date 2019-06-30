const { Transform } = require('stream')
const concat = require('concat-stream')
const http = require('http')
const qs = require('querystring')

function counter() {
  let size = 0
  return new Transform({
    transform(chunk, encoding, next) {
      size += chunk.length
      if (size > 20) {
        next(Error('maximum size reached'), null)
      } else {
        next(null, chunk)
      }
    }
  })
}

const server = http.createServer(function httpServer(req, res) {
  req
    .pipe(counter())
    .on('error', function handleError(err) {
      res.end(err.message)
    })
    .pipe(
      concat({ encoding: 'string' }, function parseBody(body) {
        const params = JSON.stringify(qs.parse(body))
        res.end(params)
      })
    )
})

server.listen(4000)
