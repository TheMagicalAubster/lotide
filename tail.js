const tailTest = require('./tailTest');

const tail = function(array) {
  let words = [];
  for (let i = 1; i <= array.length; i++) {
    words.push(array[i]);
  }
  return words;
};

module.exports = tail;




// const assertEqual = function(actual, expected) {

//   if (actual !== expected) {
//     console.log(` ${actual} !== ${expected}`);
//   } else {
//     console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
//   }
  
// };
  
// // TEST CODE
// assertEqual(tail([5,6,7]), [5,6,7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);
// assertEqual(tail([1]), []);