var Hapi = require('hapi');
var pay = require('./pay');
var sink = require('./pay-sink');
var server = new Hapi.Server();
server.connection({
  port: process.env.PORT || 3000
});

// a dummy endpoint
server.route({
  method: 'POST',
  path: '/pay',
  handler: function(request, reply) {
    // send request to RPC-enabled service
    // todo validation
    pay(request, reply);
  }
})

server.start(function(){
  console.log('~>', server.info.uri);
  sink();
});
