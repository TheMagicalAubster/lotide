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
      console.log(`The expected result was not found. ${actual} != ${expected} `);
    } else {
      console.log(` \uD83D\uDE00  SCORE! The expected result was found: ${actual} = ${expected} !`);
    }
      
  };
      
  // TEST CODE
  assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
  assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
      
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
  assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
  //assertEqual(eqArrays(["1", "2", "3"], ["four", "2", 3]),false); // => false
  //countOnly function below this line:

  const countOnly = function(allItems, itemsToCount) {
//the idea is to count the number of times a particular string shows up
//and then return at number 
const results = {}

for (const item of allItems) {
    console.log(item);
if (itemsToCount[item]){
    if (results[item]) {
        results[item] += 1;
    
    } else {
        results[item] = 1;
    }
}
}
return results;


  }
// TEST CODE BELOW
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);