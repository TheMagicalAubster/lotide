//this would be comparing the arrays, and producing a true/false
const eqArrays = require('./eqArrays');
const assertEqual = require('./assertEqual');
const eqArraysTest = require('./test/eqArraysTest');

//this would be comparing true for true or false for false
const assertArraysEqual = function(actual, expected) {
  console.log('input is given as: ', actual, expected);
  const result = eqArrays(actual, expected);

  if (!result) {
    console.log(`The expected result was not found. ${actual} != ${expected} `);
  } else {
    console.log(` \uD83D\uDE00  SCORE! The expected result was found: ${actual} = ${expected} !`);
  }
    
};


module.exports = assertArraysEqual;


