const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(` ${actual} !== ${expected}`);
  } else {
    console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
  }

};

module.exports = assertEqual;

// // TEST CODE
// assertEqual("Lighthouse Labs", "Bootcamp"); //false
// assertEqual(1, 1); //true
// assertEqual(2, 3); //false
// assertEqual("Blue", "Blue"); //true