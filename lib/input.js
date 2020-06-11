'use strict'

// dependencies required to parse user input
const minimist = require('minimist');

// user input parsed into usable data
const args = minimist(process.argv.slice(2));
let method = (Object.keys(args).slice(1).toString()); //CAUTION
let message = args.a;

// ES6 class that recieves and parses input from user
class Input {

  constructor() {
    this.action = method;
    this.payload = message;
  }

  // adds validation to insure that user input is valid
  validate(){
    let validOperator = false;
    let string = false;

    const operators = ['a', 'add'];
    if (operators.includes(this.action)) validOperator = true;

    const str = '';
    if (this.payload !== str) string = true;
    return validOperator && string;
  }
  
}


// exports the Class to be accessible to other files
module.exports = Input;

// console.log(foo)
// console.log(Object.keys(args).slice(1).toString());
// console.log(new Input());