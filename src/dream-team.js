const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(nameArray) {
  if (Array.isArray(nameArray)){
    let teamNames = [];

  for (let i = 0; i < nameArray.length; i++){
    if (typeof nameArray[i] !== 'string'){
      continue;
    } else {
      let name = nameArray[i].trim().toUpperCase();
      teamNames.push(name[0]);
    }
    
  }
  return teamNames.sort().join('');
  } else {
    return false;
  }
};
