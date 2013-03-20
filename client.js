var net = require('net')
var fs = require('fs')


var EC2 = "ec2-174-129-179-178.compute-1.amazonaws.com"
  , PORT = 5001
  , FILE = 'thing.c'

var fstream =  fs.createReadStream(FILE)

var client = net.connect(
  {
    port: PORT
  , host: EC2
  }
, fileStream )


function fileStream() {
  console.log('client connected')

}


client.on('end', function() {
  console.log('client disconnected')
})