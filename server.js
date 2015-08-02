var Hapi = require('hapi');
var pay = require('./pay');
var sink = require('./pay-sink');
var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});

var count = 0;

// a dummy endpoint
server.route({
  method: 'POST',
  path: '/pay',
  handler: function(request, reply) {
    // send request to RPC-enabled service
    // todo validation
    console.log(count++);
    pay(request, reply);
  }
})

server.start(function(){
  console.log('~>', server.info.uri);
  sink();
});
