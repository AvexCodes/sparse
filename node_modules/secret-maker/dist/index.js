'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var algorithm = 'aes-256-cbc';
var iv = new Buffer.alloc(16); // fill with zeros

var Crypto = function () {
    function Crypto(privateKey) {
        _classCallCheck(this, Crypto);

        var key = _crypto2.default.createHash('md5').update(privateKey, 'utf-8').digest('hex').toUpperCase();
        this.createCipher = _crypto2.default.createCipheriv(algorithm, key, iv);
        this.createDecipher = _crypto2.default.createDecipheriv(algorithm, key, iv);
    }

    _createClass(Crypto, [{
        key: 'encrypt',
        value: function encrypt(text) {
            return '' + this.createCipher.update(text, 'utf8', 'hex') + this.createCipher.final('hex');
        }
    }, {
        key: 'decrypt',
        value: function decrypt(text) {
            return '' + this.createDecipher.update(text, 'hex', 'utf8') + this.createDecipher.final('utf8');
        }
    }]);

    return Crypto;
}();

exports.default = Crypto;