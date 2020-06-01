//middle function - takes an array and returns the middle elements
const middleTest = require('./test/middleTest');

const middle = function(array) {
  let x = []; //empty array to return so that other functions can check array
  

  if (array.length <= 2) {
    console.log(`array is too short ${array}`);
       
  } else if (array.length % 2 === 1) {
    //this one is where it will return one element because it is an odd number
    const midPoint = array.length / 2 - 1;
    const index = midPoint.toFixed(0);

    x.push(array[index]);
    console.log('Element of middle value is: ' + array[index]);

  } else if (array.length % 2 === 0) {
    //this one is where it will return two elements because it is an even number
    const midPoint1 = array.length / 2 - 1;
    const midPoint2 = midPoint1 + 1;

    x.push(array[midPoint1], array[midPoint2]);
    console.log('Elements of two middle values are: ' + array[midPoint1] + ", " + array[midPoint2]);

  }
  // console.log(x);
  return x;
};

module.exports = middle;


// middle([1, 2, 3, 10, 14, 33, 22]);