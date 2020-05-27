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
assertEqual(countLetters("Lighthouse in the house"), { L: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 });

//   assertEqual(1, 1);
//   assertEqual(2, 3);
//   assertEqual("Blue", "Blue");

