// crypto module
const crypto = require("crypto");

const algorithm = "aes-256-cbc";

//generate random 16 bytes data
const initVector = crypto.randomBytes(16);

//secret message
const message = "I guess we will never know";

//generate 32 bytes secret key of random data

const SecurityKey = crypto.randomBytes(32);

//the cipher function
const cipher = crypto.createCipheriv(algorithm, SecurityKey, initVector);

//encrypt the message
let encryptedData = cipher.update(message, "utf-8", "hex");

//input encoding
encryptedData += cipher.final("hex");

//output encoding
console.log("Encrypted message: " + encryptedData);

//the decipher function

const decipher = crypto.createDecipheriv(algorithm, SecurityKey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted message: " + decryptedData);