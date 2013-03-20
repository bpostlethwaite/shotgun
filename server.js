var net = require('net')
  , fs = require('fs')
  , PORT = 5001
  , FILE = 'thing.c'

var server = net.createServer( handler )

var fstream = fs.createWriteStream(FILE)

fstream.on('end', function () {
  console.log('file transferred')
})

function handler (stream) { //'connection' listener

  console.log('server connected')

  stream.on('end', function() {
    console.log('transfer complete')
  })

  stream.pipe(fstream)
}

server.listen(PORT, function() { //'listening' listener
    console.log('server bound')
})