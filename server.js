var Hapi = require('hapi');
var pay = require('./pay');
var sink = require('./pay-sink');
var server = new Hapi.Server();

var pnrickmem = require('pubnub-rickshaw-memory');
pnrickmem.init({dev: true});

server.connection({
  port: process.env.PORT || 3000
});

var count = 1;

// a dummy endpoint
server.route({
  method: 'POST',
  path: '/pay',
  handler: function(request, reply) {
    // send request to RPC-enabled service
    // todo validation
    process.stdout.write('req: ' + (count++) + '\r');
    pay(request, reply);
  }
})

server.start(function(){
  console.log('~>', server.info.uri);
  sink();
});
