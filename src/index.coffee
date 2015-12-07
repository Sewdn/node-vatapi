{ApiV1} = require './ApiV1'
module.exports = (options) ->
  return new ApiV1(options)

module.exports.ApiV1 = ApiV1
