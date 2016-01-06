//var crypto = require('crypto-js');
//
//var secretMessage = 'The treasure is located in a pineapple under the sea.';
//var secretKey = '123abc';
//
////Encrypt
//var encryptedMessage = crypto.AES.encrypt(secretMessage, secretKey);
//console.log('Encrypted Message: ' + encryptedMessage);
//
////Decrypt
//var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
//var decryptedMessage = bytes.toString(crypto.enc.Utf8);
//console.log('Decrypted Message: ' + decryptedMessage);



//Challenge

var crypto = require('crypto-js');

var secretMessage = {
	name: 'Glen',
	secretName: '007'
};
var secretKey = '123abc';

//Encrypt
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(secretMessage), secretKey);
console.log('Encrypted Message: ' + encryptedMessage);

//Decrypt
var bytes = crypto.AES.decrypt(encryptedMessage, secretKey);
var decryptedMessage = JSON.parse(bytes.toString(crypto.enc.Utf8));
console.log('Decrypted Message: ' + decryptedMessage.secretName);