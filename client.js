var net = require('net')
var fs = require('fs')


var EC2 = "ec2-174-129-179-178.compute-1.amazonaws.com"
  , PORT = 5001
  , FILE = 'thing.c'


var socket = net.connect(
  {
    port: PORT
  , host: EC2
  }
, connectcb )

var fstream =  fs.createReadStream(FILE)

fstream.on('end', function () {
  socket.end()
})


function connectcb() {
  console.log('client connected - transferring file')
  fstream.pipe(socket)

}


fstream.on('end', function() {
  console.log('client disconnected')
})