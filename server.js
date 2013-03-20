var net = require('net')
var server = net.createServer(function(stream) { //'connection' listener
    console.log('server connected')
    stream.on('end', function() {
	console.log('server disconnected')
    })
    stream.write('hello\r\n')
    stream.pipe(stream)
})
server.listen(5001, function() { //'listening' listener
    console.log('server bound')
})