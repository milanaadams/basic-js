const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.repeatTimes < 1){
    return '';
  }
  let addition = '';
  if (options.addition !== undefined){
    for (let i = 0; i < options.additionRepeatTimes - 1; i++){
      options.additionSeparator ? addition += (options.addition + options.additionSeparator) : addition += (options.addition + '|');
    }
    addition += options.addition;
  }
  

  let newString = '';
  for (let i = 0; i < options.repeatTimes - 1; i++){
    options.separator ? newString += (str + addition + options.separator) : newString += (str + addition + '+');
  }
  newString += (str + addition);

  return newString;
};
  