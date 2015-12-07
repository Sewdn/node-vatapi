debug = require('debug') 'vatapi:ApiV1'
{ApiBaseHTTP} = require './ApiBaseHTTP'

class module.exports.ApiV1 extends ApiBaseHTTP
  handleOptions: =>
    super
    @options.base_url = 'v1'
    debug "handleOptions()"
