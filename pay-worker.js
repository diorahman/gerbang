var request = require('hyperquest');
var URI = 'https://data.blankon.id/api/bahanpokok?q=bandung';
module.exports = function(cb) {
  var r = request(URI);
  var data = '';
  r.on('data', function(chunk){
    data += chunk;
  });
  r.on('error', function(err){
    cb(err);
  });
  r.on('end', function(){
    cb(null, data);
  });
}

