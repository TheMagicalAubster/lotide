const countLetters = function(string) {
  const result = {};

  for (let item of string) {
        
    if (item !== ' ') {
      if (result[item]) {
        result[item] += 1;
            
      } else {
        result[item] = 1;
      }
    }
  }

  console.log(result);
  return result;

};

const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(` ${actual} !== ${expected}`);
  } else {
    console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  }
  
};
  

// TEST CODE
const result = countLetters("Lighthouse in the house");
assertEqual(result["L"], 1);
//   assertEqual(1, 1);
//   assertEqual(2, 3);
//   assertEqual("Blue", "Blue");

