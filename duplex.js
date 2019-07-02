const net = require('net')

net
  .createServer(function createServer(stream) {
    stream.pipe(stream)
  })
  .listen(5000)
