const headTest = require('./headTest');

const head = function(actual) {
  let arrayHead = actual[0];
  return arrayHead;
};

module.exports = head;

// const assertEqual = function(actual, expected) {

  // if (actual !== expected) {
  //   console.log(` ${actual} !== ${expected}`);
  // } else {
  //   console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  // }
  
// };
  
  

// // TEST CODE
// assertEqual(head([5,6,7]), 6); //false
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"); //true