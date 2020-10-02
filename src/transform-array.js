const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];
  if (Array.isArray(arr)){
    let i = 0;
    while (i < arr.length){
      if (arr[i] === '--discard-next'){
        i = i + 2;
      } else if (arr[i] === '--discard-prev'){
        if (arr[i - 1] !== undefined){
          if (arr[i - 2] === '--discard-next'){
            i++;
          } else{
            if (newArr !== undefined){
              newArr.pop();
              i++;
            } else{
              i++
            }
          }
        } else {
          i++;
        } 

      } else if (arr[i] === '--double-next'){
        if (arr[i + 1] !== undefined){
          newArr.push(arr[i + 1]);
          i++;
        } else {
          i++;
        }  
      } else if (arr[i] === '--double-prev'){
        if (arr[i - 2] === '--discard-next'){
          i++;
        }else if (arr[i - 1] !== undefined){
          newArr.push(arr[i - 1]);
          i++;
        } else {
          i++;
        }  
      } else {
        newArr.push(arr[i]);
        i++;
      }
    } 
  } else {
    throw 'Not an array!'
  }
  return newArr;
};
