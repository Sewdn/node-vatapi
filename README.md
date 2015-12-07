# node-vatapi

[![NPM Badge](https://nodei.co/npm/gitlab.png?downloads=true&stars=true)](https://npmjs.org/package/vatapi)
--

[VatAPI](https://vatapi.com/) Nodejs library.
It wraps the HTTP api library described [here](https://vatapi.com/console/#!/api/).

Based on the NodeJS HTTP API wrapper of gitlab described [here](https://github.com/node-gitlab/node-gitlab)

Maintained by [Pieter Soudan](https://github.com/Sewdn).


## Install

```bash
# Install from npm
npm install vatapi
```

## Usage

### Coffee-Script
```coffee
# Connection
vatapi = (require 'vatapi')
  key:   'your_key'

# Check a VAT
vatapi.vat.number_check (vat) ->
  console.log "##{user.id}: #{user.email}, #{user.name}, #{user.created_at}" for user in users
```

### Javascript
```javascript
// Connection
var vatapi = require('vatapi')({
  key:   'your_key'
});

// check a vat
vatapi.vat.number_check(function(users) {
  for (var i = 0; i < users.length; i++) {
    console.log("#" + users[i].id + ": " + users[i].email + ", " + users[i].name + ", " + users[i].created_at);
  }
});

```

## Develop

Install coffee-script globally: 'npm install -g coffee-script'.
Edit the Coffee-Script files in `src`, then build them using `cake build`.
Use `cake watch` to build files continuously while developing.

## Contributors

- [Pieter Soudan](https://github.com/Sewdn)

## License

MIT


## Changelog

