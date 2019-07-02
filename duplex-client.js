const net = require('net')

net
  .createServer(function createServer(stream) {
    stream.pipe(net.connect(5000, 'localhost')).pipe(stream)
  })
  .listen(5001)
