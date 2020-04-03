import Block from './Block'
var sha256 = require('crypto-js/sha256')

var nameHashed = sha256('vinicius')
console.log(nameHashed)