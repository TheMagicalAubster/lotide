// TEST CODE assertEqualTest.js

const assertEqual = require('../assertEqual');

assertEqual("Lighthouse Labs", "Bootcamp"); //false
assertEqual(1, 1); //true
assertEqual(2, 3); //false
assertEqual("Blue", "Blue"); //true

module.export = assertEqualTest;