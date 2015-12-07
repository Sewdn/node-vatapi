debug = require('debug') 'vatapi:ApiBase'

class module.exports.ApiBase
  constructor: (@options) ->
    do @handleOptions
    do @init
    debug "constructor()"

  handleOptions: =>
    @options.verbose ?= false
    debug "handleOptions()"

  init: =>
    @client = @
    debug "init()"
    @vat            = require('./Models/Vat')           @client
    @varia          = require('./Models/Varia')         @client
    # @invoice        = require('./Models/Invoice')       @client
