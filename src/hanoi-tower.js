const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numberOfTurns = Math.pow(2, disksNumber) - 1;
  let time = Math.floor(3600 / turnsSpeed * numberOfTurns);
  let tower= {
    turns: numberOfTurns,
    seconds: time
  };
  return tower;
};
