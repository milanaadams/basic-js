const CustomError = require("../extensions/custom-error");


const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (value !== undefined){
      this.chain.push(`( ${value} )`);
    } else {
      this.chain.push('( )');
    }
    return this;
  },
  removeLink(position) {
    if (this.chain[position - 1] && this.chain[position]){
      this.chain.splice(position - 1, 1);
    } else if (this.chain[position - 1]){
      this.chain.slice(position - 1);
    } else {
      this.chain = [];
      throw "Oops! Invalid remove position."
    }
    return this;
    
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = chainMaker;
