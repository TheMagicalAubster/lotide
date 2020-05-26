const head = function(actual) {
  let arrayHead = actual[0];
  return arrayHead;
};


const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(` ${actual} !== ${expected}`);
  } else {
    console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  }
  
};
  
  

// TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");