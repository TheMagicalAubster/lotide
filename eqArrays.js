const eqArraysTest = require ('./eqArraysTest');

//this would be comparing the arrays, and producing a true/false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  };
  


  return true;
};

module.exports = eqArrays; 



// //this would be comparing true for true or false for false
// const assertEqual = function(actual, expected) {

//   if (actual !== expected) {
//     console.log(` ${actual} !== ${expected}`);
//   } else {
//     console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
//   }
  
// }

// TEST CODE
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => true
//assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
  
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
//assertEqual(eqArrays(["1", "2", "3"], ["four", "2", 3]),false); // => false