
const findKey = function(object, callback) {
   
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(` ${actual} !== ${expected}`);
  } else {
    console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  }
  
};
  
// TEST CODE
let result = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};  // => "noma"

assertEqual(findKey(result, x => x.stars === 2), "noma"); //noma


let result2 = {
  "Dasha": { stars: 1 },
  "Tycho": { stars: 3 },
  "Digger":{ stars: 2 },
  "Leo":   { stars: 3 },
  "Sparkles":{ stars: 2 }, //Tycho
    
};

assertEqual(findKey(result2, x => x.stars === 3), "Digger"); //Tycho
