(function() {
  var BaseModel, Varia,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Varia = (function(superClass) {
    extend(Varia, superClass);

    function Varia() {
      this.ip_check = bind(this.ip_check, this);
      this.currency_conversion = bind(this.currency_conversion, this);
      this.country_code_check = bind(this.country_code_check, this);
      return Varia.__super__.constructor.apply(this, arguments);
    }

    Varia.prototype.country_code_check = function(code, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Varia::country_code_check(" + code + ")");
      params = {
        code: code
      };
      return this.get("country-code-check", params, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Varia.prototype.currency_conversion = function(from, to, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Varia::currency_conversion(" + from + ", " + to + ")");
      params = {
        currency_from: from,
        currency_to: to
      };
      return this.get("currency-conversion", params, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Varia.prototype.ip_check = function(ip, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Varia::ip_check(" + ip + ")");
      params = {
        address: ip
      };
      return this.get("ip-check", params, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Varia;

  })(BaseModel);

  module.exports = function(client) {
    return new Varia(client);
  };

}).call(this);
