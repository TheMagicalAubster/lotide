// function will return a slice of the array with elements taken from the beginning

const takeUntil = function(array, callback) {

  //make empty array to be filled with new data
  const results = [];
  //step 1 - scan through array
  for (let item of array) {
 
    //if true, then kick out of loop
    if (callback(item)) {
      return results;
    }
    results.push(item);
  }
  return results;
};
  
//this would be comparing the arrays, and producing a true/false
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
    
  
  
  return true;
};
  //this would be comparing true for true or false for false
const assertEqual = function(actual, expected) {
  
  if (actual !== expected) {
    console.log(` ${actual} !== ${expected}`);
  } else {
    console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  }
    
};
  
// TEST CODE
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

assertEqual(eqArrays(takeUntil(data1, x => x < 0), false), false); // => true
 
console.log('---');
 
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

assertEqual(eqArrays(takeUntil(data2, x => x === ','), false), false); // => true
 

   
 





