BaseModel = require '../BaseModel'

class Varia extends BaseModel

  country_code_check: (code, fn = null) =>
    @debug "Varia::country_code_check(#{code})"
    params =
      code: code
    @get "country-code-check", params, (err, data) -> fn err, data if fn

  currency_conversion: (from, to, fn = null) =>
    @debug "Varia::currency_conversion(#{from}, #{to})"
    params =
      currency_from: from,
      currency_to: to
    @get "currency-conversion", params, (err, data) -> fn err, data if fn

  ip_check: (ip, fn = null) =>
    @debug "Varia::ip_check(#{ip})"
    params =
      address: ip
    @get "ip-check", params, (err, data) -> fn err, data if fn

module.exports = (client) -> new Varia client
