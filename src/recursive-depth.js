const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {

  calculateDepth(arr) {
    let count = 1;
    arr = arr.filter(x => Array.isArray(x));
    if (arr.length > 0){
      arr = arr.flat();
      count += this.calculateDepth(arr);
    } 
    return count;
    
  }
};