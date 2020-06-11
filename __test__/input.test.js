'use strict'

// dependencies for testing
const minimist = require('minimist');
jest.mock('minimist');

//valid input mock
minimist.mockImplementation( () => {
  return {
    _: [],
    a: 'hello world',
  }
});

// const mockFn = jest.mock('minimist')
//   .mockImplementaionOnce( () => { a: 'hello world' }) //valid
//   .mockImplementaionOnce( () => { z: '' }) //invalid

const Input = require('../lib/input');

// valid input test
describe('Testing the input.js module to verify user input is successfully being received', () => {
  it('should return an action/method and a payload/message', () => {
    let test = new Input();
    console.log(test.validate());
    expect(test.validate()).toBe(true);
  })
});

// invalid input test
