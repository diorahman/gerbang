var request = require('hyperquest');
var URI = 'https://data.blankon.id/api/bahanpokok?q=';
module.exports = function(param, cb) {
  var r = request(URI + param.city);
  var data = '';
  r.on('data', function(chunk) {
    data += chunk;
  });
  r.on('response', function(res) {
    if (res.statusCode != 200)
      // todo: create error class for this
      cb(new Error('Error'));
  });
  r.on('error', function(err) {
    cb(err);
  });
  r.on('end', function() {
    cb(null, data);
  });
}

