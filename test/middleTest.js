

// TEST CODE middleTest.js



const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), '2');
  });
    
  it("returns 'array is too short' for [1]", () => {
    assert.strictEqual(middle([1]), 'array is too short');
  });

  it("returns 'array is too short' for ['5']", () => {
    assert.strictEqual(middle(['5']), 'array is too short'); 
  });

  it("returns '6' for ['2','6','5']", () => {
    assert.strictEqual(middle(['2','6','5']), '6');
  });

  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(middle(['Hello', 'Lighthouse', 'Labs']), 'Lighthouse');
  });

});

const assertArraysEqual = require('../assertArraysEqual');








// const middle = require('../middle.js');
// const assertArraysEqual = require('../assertArraysEqual');


// // TEST CODE
//  assertArraysEqual(middle([1, 2, 3, 10, 14, 33, 22]), [10]); // => true; 
//  assertArraysEqual([10], [10]); // => true; 



// TEST CODE
// assertEqual(middle([5,6,7]), [5,6,7]);
// assertEqual(middle(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);
// assertEqual(middle([1]), []);


 // assertEqual(eqArrays(middle([1, 4, 35, 24, 44, 22, 57, 3, 4, 1]), [2, 3]), false); // => false

// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
// //assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
// //assertEqual(eqArrays(["1", "2", "3"], ["four", "2", 3]),false); // => false

// //middle([1, 2, 3, 4, 5]) // => [3,4]