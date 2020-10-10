const { model } = require("../../model/dto/student.dto");
const config = require("config")
/** packs */


var CryptoJS = require("crypto-js")

/**Encrypt password */
exports.EncryptPassword = (password)=>{
    let secretKey = config.get("secretkeys").cryptoJS
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString()
    return encryptedPassword;
}