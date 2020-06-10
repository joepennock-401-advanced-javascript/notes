'use strict'

// ES6 Class that takes user input, adds note to console.log and returns prompt back to user
class Notes {

  constructor(input) {
    this.action  = input.action;
    this.payload = input.payload;
    this.id = Math.floor(Math.random()*100000)
  }

  // runs the add() method, switching to the necessary action based off of user input
  execute() {
    const actions = ['add', 'a'];

    switch (actions.includes(this.action)){
      case 'add' || 'a':
        Notes.add;
        break;
    }
  }

  // method that adds note to system and returns message to user
  add() {
    let note = new Notes(this.action, this.payload);
    console.log('adding note: ' + this.payload);
    return note;
  }

}

module.exports = Notes;

// console.log(new Notes('add', 'this is a note test'));
