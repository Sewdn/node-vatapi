(function() {
  var BaseModel, Invoice,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  BaseModel = require('../BaseModel');

  Invoice = (function(superClass) {
    extend(Invoice, superClass);

    function Invoice() {
      this.remove = bind(this.remove, this);
      this.update = bind(this.update, this);
      this.retrieve = bind(this.retrieve, this);
      this.create = bind(this.create, this);
      return Invoice.__super__.constructor.apply(this, arguments);
    }

    Invoice.prototype.create = function(body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Invoice::create(" + body + ")");
      return this.post("invoice", body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Invoice.prototype.retrieve = function(invoiceId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Invoice::retrieve(" + invoiceId + ")");
      return this.get("invoice/" + invoiceId, {}, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Invoice.prototype.update = function(invoiceId, body, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Invoice::update(" + invoiceId + ", " + body + ")");
      return this.put("invoice/" + invoiceId, body, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    Invoice.prototype.remove = function(invoiceId, fn) {
      if (fn == null) {
        fn = null;
      }
      this.debug("Invoice::remove(" + invoiceId + ")");
      return this["delete"]("invoice/" + invoiceId, function(err, data) {
        if (fn) {
          return fn(err, data);
        }
      });
    };

    return Invoice;

  })(BaseModel);

  module.exports = function(client) {
    return new Invoice(client);
  };

}).call(this);
