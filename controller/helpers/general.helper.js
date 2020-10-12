const config = require("config")
/** packs */
const CryptoJS = require("crypto-js")

const jwt = require("jsonwebtoken")

/**Encrypt password */
exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretkeys").cryptoJS
    let encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString()
    return encryptedPassword;
}

exports.DecryptPassword = (encryptedPassword) => {
    let secretKey = config.get("secretkeys").cryptoJS
    let bytes = CryptoJS.AES.decrypt(encryptedPassword, secretKey);
    let originalPass = bytes.toString(CryptoJS.enc.Utf8);

    return originalPass
}
exports.GenerateToken = (user) => {
    let secretKey = config.get("secretkeys").jwt
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: user.username,
            id: user._id
        }
    }, secretKey)
    return token
}
