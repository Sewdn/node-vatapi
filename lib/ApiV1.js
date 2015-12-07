(function() {
  var ApiBaseHTTP, debug,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  debug = require('debug')('vatapi:ApiV1');

  ApiBaseHTTP = require('./ApiBaseHTTP').ApiBaseHTTP;

  module.exports.ApiV1 = (function(superClass) {
    extend(ApiV1, superClass);

    function ApiV1() {
      this.handleOptions = bind(this.handleOptions, this);
      return ApiV1.__super__.constructor.apply(this, arguments);
    }

    ApiV1.prototype.handleOptions = function() {
      ApiV1.__super__.handleOptions.apply(this, arguments);
      this.options.base_url = 'v1';
      return debug("handleOptions()");
    };

    return ApiV1;

  })(ApiBaseHTTP);

}).call(this);
