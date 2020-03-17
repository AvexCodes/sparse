'use strict';

var _assert = require('assert');

var _assert2 = _interopRequireDefault(_assert);

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _ = require('../.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var hash = 'testtest';
var crypto1 = new _2.default(hash);
var crypto2 = new _2.default(hash);
var rawText = '1234567890';
var encryptedHash = crypto1.encrypt(rawText);
var decryptedText = crypto2.decrypt(encryptedHash);

describe('Crypto', function () {
    describe('encrypt', function () {
        it('should encrypt text without error', function () {
            _assert2.default.equal(decryptedText, rawText);
        });
    });
});