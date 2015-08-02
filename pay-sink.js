var payWorker = require('./pay-worker');

module.exports = function() {
  var rpc = require('amqp-rpc')
    .factory({
      url: 'amqp://localhost:5672'
    });

  rpc.on('pay', function(param, cb){
    // we can add level of asynchronousity by using node-worker-farm
    payWorker(function(err, data){
      if (err)
        return cb(err.message);
      cb(data);
    })
  });
}

