BaseModel = require '../BaseModel'

class Vat extends BaseModel

  number_check: (vat, fn = null) =>
    @debug "Vat::number_check(#{vat})"
    params =
      vatid: vat
    @get "vat-number-check", params, (err, data) -> fn err, data if fn

  price: (code, price, fn = null) =>
    @debug "Vat::price(#{code}, #{price})"
    params =
      code: code,
      price: price
    @get "vat-price", params, (err, data) -> fn err, data if fn

  rates: (fn = null) =>
    @debug "Vat::rates()"
    @get "vat-rates", (err, data) -> fn err, data if fn

module.exports = (client) -> new Vat client
