const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(type){
    if ( type === true || type === undefined){
      this.machineType = 'direct';
    } else {
      this.machineType = 'reverse';
    }
    
  }
  encrypt(message, key) {
    if (!message || !key ){
      throw 'Message and key must be provided';
    }
  
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let lettercheck = /^[a-zA-Z]$/;
  
    let messageLetterCount = 0;
    for (let i = 0; i < message.length; i++){
      if (lettercheck.test(message[i])){
        messageLetterCount++;
      }
    }
  
    let cypherKeys = [];
    for (let i = 0; i < messageLetterCount; i++){
      if (i < key.length){
        cypherKeys.push(abc.indexOf(key[i].toLowerCase()));
      } else {
        cypherKeys.push(abc.indexOf(key[i % key.length].toLowerCase()));
      }
    }
  
    let cypheredMessage = '';
    let cypherKeyIndex = 0;
    for ( let i = 0; i < message.length; i++){
      if (lettercheck.test(message[i])){
        let newIndex;
        newIndex = (abc.indexOf(message[i].toLowerCase()) + cypherKeys[cypherKeyIndex]) % 26;
        cypherKeyIndex++;
        cypheredMessage += abc[newIndex];
        } else {
          cypheredMessage += message[i];
        }
      
    }

    return this.machineType === 'direct' ? cypheredMessage.toUpperCase() : cypheredMessage.toUpperCase().split('').reverse().join('');
  }    



  decrypt(encryptedMessage, key) {
    
    if (!encryptedMessage || !key ){
      throw 'Message and key must be provided';
    }
  
    let abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let lettercheck = /^[a-zA-Z]$/;
  
    let messageLetterCount = 0;
    for (let i = 0; i < encryptedMessage.length; i++){
      if (lettercheck.test(encryptedMessage[i])){
        messageLetterCount++;
      }
    }
  
    let cypherKeys = [];
    for (let i = 0; i < messageLetterCount; i++){
      if (i < key.length){
        cypherKeys.push(abc.indexOf(key[i].toLowerCase()));
      } else {
        cypherKeys.push(abc.indexOf(key[i % key.length].toLowerCase()));
      }
    }
  
    let uncypheredMessage = '';
    let cypherKeyIndex = 0;
    for ( let i = 0; i < encryptedMessage.length; i++){
      if (lettercheck.test(encryptedMessage[i])){
        let newIndex;
        if (cypherKeys[cypherKeyIndex] <= abc.indexOf(encryptedMessage[i].toLowerCase())){
          newIndex = (Math.abs(abc.indexOf(encryptedMessage[i].toLowerCase()) - cypherKeys[cypherKeyIndex]));
        } else {
          newIndex = 26 + abc.indexOf(encryptedMessage[i].toLowerCase()) - cypherKeys[cypherKeyIndex];
        }
        cypherKeyIndex++;
        uncypheredMessage += abc[newIndex];
        } else {
          uncypheredMessage += encryptedMessage[i];
        }
      
    }

    return this.machineType === 'direct' ? uncypheredMessage.toUpperCase() : uncypheredMessage.toUpperCase().split('').reverse().join('');


  }
}

module.exports = VigenereCipheringMachine;
