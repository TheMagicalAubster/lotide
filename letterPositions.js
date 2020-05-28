const letterPositions = function(sentence) {
    
  const result = {};
  sentence.toLowerCase().split("").forEach(function(item, index) {
   
    if (item === ' ') return;
    
    if (result[item]) {
            
      result[item].push(index);
                
    } else {

      result[item] = [index];
            
    }
        
  });

  console.log(result);
  return result;
    
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
    console.log(`The expected result was not found. ${actual} != ${expected} `);
  } else {
    console.log(` \uD83D\uDE00  SCORE! The expected result was found: ${actual} = ${expected} !`);
  }
      
};
      
// TEST CODE

// const result = "hello Hi There";
// const letter = letterPositions(result);

// assertEqual(eqArrays([ 0, 6, 10 ], letter.h), true);

const result = "Lalalalalala";
const letter = letterPositions(result);

assertEqual(eqArrays([ 0, 2, 4, 6, 10 ], letter.l), false);