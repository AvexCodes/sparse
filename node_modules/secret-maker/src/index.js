import crypto from 'crypto'

const algorithm = 'aes-256-cbc';
const iv = new Buffer.alloc(16); // fill with zeros

class Crypto {
    constructor(privateKey){
        const key = crypto.createHash('md5').update(privateKey, 'utf-8').digest('hex').toUpperCase();        
        this.createCipher = crypto.createCipheriv(algorithm, key, iv)
        this.createDecipher = crypto.createDecipheriv(algorithm, key, iv)
    }

    encrypt(text) {
        return `${this.createCipher.update(text, 'utf8', 'hex')}${this.createCipher.final('hex')}`
    }

    decrypt(text) {
        return `${this.createDecipher.update(text,'hex','utf8')}${this.createDecipher.final('utf8')}`       
    }
}

export default Crypto