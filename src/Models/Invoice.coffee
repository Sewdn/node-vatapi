BaseModel = require '../BaseModel'

class Invoice extends BaseModel

  create: (body, fn = null) =>
    @debug "Invoice::create(#{body})"
    @post "invoice", body, (err, data) -> fn err, data if fn

  retrieve: (invoiceId, fn = null) =>
    @debug "Invoice::retrieve(#{invoiceId})"
    @get "invoice/" + invoiceId, {}, (err, data) -> fn err, data if fn

  update: (invoiceId, body, fn = null) =>
    @debug "Invoice::update(#{invoiceId}, #{body})"
    @put "invoice/" + invoiceId, body, (err, data) -> fn err, data if fn

  delete: (invoiceId, fn = null) =>
    @debug "Invoice::delete(#{invoiceId})"
    @delete "invoice/" + invoiceId, {}, (err, data) -> fn err, data if fn

module.exports = (client) -> new Invoice client
