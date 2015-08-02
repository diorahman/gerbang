module.exports = pay;

var rpc = require('amqp-rpc')
  .factory({
    url: 'amqp://localhost:5672'
  });

function pay(req, res) {
  // do request via rabbit
  rpc.call('pay', req.payload, function(msg) {
    res(msg);
  });
}
