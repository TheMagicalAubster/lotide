const assertEqual = function(actual, expected) {

  if (actual !== expected) {
    console.log(actual + " !== " + expected);
  } else {
    console.log("\uD83D\uDE00 " + actual + " === " + expected);
  }

};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(2, 3);
assertEqual("Blue", "Blue");