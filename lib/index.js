(function() {
  var ApiV1;

  ApiV1 = require('./ApiV1').ApiV1;

  module.exports = function(options) {
    return new ApiV1(options);
  };

  module.exports.ApiV1 = ApiV1;

}).call(this);
