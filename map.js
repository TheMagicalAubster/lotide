const words = ["Aye", "luv", "to", "par", "tay"];


const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  console.log('map result is: ', results);
  return results;

};

const results1 = map(words, word => word[0]);
console.log(results1);

// //check arrays are equal
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    //console.log('eqArray result is 1: ', false);
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      //console.log('eqArray result is 2: ', false);
      return false;
    }
  }
  // console.log('eqArray result is: ', true);
  return true;
};

//this would be comparing true for true or false for false
const assertEqual = function(actual, expected) {
  
  if (actual !== expected) {
    console.log(`actual is ${actual} !== expected is ${expected}`);
    
  } else {
    console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  }
    
};
    
// // TEST CODE
assertEqual(eqArrays(map(words, word => word[0]), false), false); // => true

 
// //assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
    
// //assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// //assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
// //assertEqual(eqArrays(["1", "2", "3"], ["four", "2", 3]),false); // => false



