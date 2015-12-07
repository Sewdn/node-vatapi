(function() {
  var BaseModel, Vat,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Vat = (function(superClass) {
    extend(Vat, superClass);

    function Vat() {
      this.rates = bind(this.rates, this);
      this.price = bind(this.price, this);
      this.number_check = bind(this.number_check, this);
      return Vat.__super__.constructor.apply(this, arguments);
    }

    Vat.prototype.number_check = function(vat, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Vat::number_check(" + vat + ")");
      params = {
        vatid: vat
      };
      return this.get("vat-number-check", params, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Vat.prototype.price = function(code, price, fn) {
      var params;
      if (fn == null) {
        fn = null;
      }
      this.debug("Vat::price(" + code + ", " + price + ")");
      params = {
        code: code,
        price: price
      };
      return this.get("vat-price", params, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Vat.prototype.rates = function(fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Vat::rates()");
      return this.get("vat-rates", function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Vat;

  })(BaseModel);

  module.exports = function(client) {
    return new Vat(client);
  };

}).call(this);
