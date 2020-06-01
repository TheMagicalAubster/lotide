// TEST CODE tailTest.js



const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns 3 for [1, 2, 3]", () => {
    assert.strictEqual(tail([1, 2, 3]), 3);
  });

  it("returns '5' for ['5']", () => {
    assert.Equal(tail(['5']), '5'); 
  });

  it("returns '6' for ['6']", () => {
      assert.strictEqual(tail(['6']), '6');
  });

  it("returns 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Labs']), 'Labs');
});

});

const assertEqual = require('../assertEqual');



// TEST CODE
// assertEqual(tail([5,6,7]), [5,6,7]);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Hello", "Lighthouse", "Labs"]);
// assertEqual(tail([1]), []);