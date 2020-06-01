

const middle = require('../middle.js');
const assertArraysEqual = require('../assertArraysEqual');


// TEST CODE
 assertArraysEqual(middle([1, 2, 3, 10, 14, 33, 22]), [10]); // => true; 
 assertArraysEqual([10], [10]); // => true; 



 // assertEqual(eqArrays(middle([1, 4, 35, 24, 44, 22, 57, 3, 4, 1]), [2, 3]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// //assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
// //assertEqual(eqArrays(["1", "2", "3"], ["four", "2", 3]),false); // => false

// //middle([1, 2, 3, 4, 5]) // => [3,4]