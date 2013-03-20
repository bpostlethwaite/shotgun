var net = require('net')
  , fs = require('fs')
  , PORT = 5001
  , FILE = 'thing.c'
  , fstream = fs.createWriteStream(FILE)

var server = net.createServer( handler )

function handler (stream) { //'connection' listener
  console.log('server connected')
  stream.on('end', function() {
    console.log('server disconnected')
  })

  stream.pipe(fstream)
}

server.listen(PORT, function() { //'listening' listener
    console.log('server bound')
})