var net = require('net')
  , fs = require('fs')
  , PORT = 5001
  , FILE = 'thing.c'

var bit = 0

var server = net.createServer( handler )

var fstream = fs.createWriteStream(FILE)

fstream.on('data', function () {
  process.stdout.write('\r' + !bit)
})

fstream.on('end', function () {
  console.log('file transferred')
})

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