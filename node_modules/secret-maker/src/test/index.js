import assert from 'assert'
import crypto from 'crypto'
import Crypto from '../.'

const hash = 'testtest'
const crypto1 = new Crypto(hash)       
const crypto2 = new Crypto(hash)    
const rawText = '1234567890';
const encryptedHash = crypto1.encrypt(rawText);
const decryptedText = crypto2.decrypt(encryptedHash);

describe('Crypto', function() {
    describe('encrypt', function() {
        it('should encrypt text without error', function() {
            assert.equal(decryptedText, rawText);
        });
    });
});