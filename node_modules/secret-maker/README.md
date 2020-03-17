# secret-maker
Encrypt and decrypt text by AES 256

## Install
npm i secret-maker -S

## Sample
````
import Crypto from 'secret-maker'
or 
const Crypto = require("secret-maker").default

const privateKey = 'testtest'
const crypto = new Crypto(privateKey)

const rawText = '1234567890';

const encryptedHash = crypto.encrypt(rawText);
const decryptedText = crypto.decrypt(encryptedHash);

console.log(rawText == decryptedText)
````
