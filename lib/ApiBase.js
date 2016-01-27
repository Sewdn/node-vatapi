(function() {
  var debug,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  debug = require('debug')('vatapi:ApiBase');

  module.exports.ApiBase = (function() {
    function ApiBase(options) {
      this.options = options;
      this.init = bind(this.init, this);
      this.handleOptions = bind(this.handleOptions, this);
      this.handleOptions();
      this.init();
      debug("constructor()");
    }

    ApiBase.prototype.handleOptions = function() {
      var base;
      if ((base = this.options).verbose == null) {
        base.verbose = false;
      }
      return debug("handleOptions()");
    };

    ApiBase.prototype.init = function() {
      this.client = this;
      debug("init()");
      this.vat = require('./Models/Vat')(this.client);
      this.varia = require('./Models/Varia')(this.client);
      return this.invoice = require('./Models/Invoice')(this.client);
    };

    return ApiBase;

  })();

}).call(this);
