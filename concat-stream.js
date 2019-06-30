const concat = require('concat-stream')
const http = require('http')
const qs = require('querystring')

const server = http.createServer(function httpServer(req, res) {
  req.pipe(
    concat({ encoding: 'string' }, function parseBody(body) {
      const params = JSON.stringify(qs.parse(body))
      res.end(params)
    })
  )
})

server.listen(4000)
