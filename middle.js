//middle function - takes an array and returns the middle elements

const middle = function(array){
    var x = []; //empty array to return so that other functions can check array
  

    if (array.length <= 2){
        console.log(`array is too short ${array}`);
       
    } else if (array.length % 2 === 1){
        //this one is where it will return one element because it is an odd number
        const midPoint = array.length/2 - 1;
        const index = midPoint.toFixed(0);

        x.push(array[index]);
        console.log('Element of middle value is: ' + array[index]);

        

    } else if (array.length % 2 === 0){
        //this one is where it will return two elements because it is an even number
        const midPoint1 = array.length/2 - 1;
        const midPoint2 = midPoint1 + 1;

        x.push(array[midPoint1], array[midPoint2]);
        console.log('Elements of two middle values are: ' + array[midPoint1] + ", " + array[midPoint2]);

    }
    console.log(x);
    return x;
}



//this would be comparing the arrays, and producing a true/false
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
      return false;
    }
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true;
  };
  
  //this would be comparing true for true or false for false
  const assertEqual = function(actual, expected) {
    
    if (actual !== expected) {
     // console.log(`The expected result was not found. ${actual} != ${expected} `);
    } else {
     // console.log(` \uD83D\uDE00  SCORE! The expected result was found: ${actual} = ${expected} !`);
    }
      
  };


// TEST CODE
assertEqual(eqArrays(middle([1, 2, 3, 10, 14, 33, 22]), [2, 3]), true); // => true; first array is the middle, and second array is the indexes that it should be checking for
assertEqual(eqArrays(middle([1, 4, 35, 24, 44, 22, 57, 3, 4, 1]), [2, 3]), false); // => false 
    
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
//assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]),false); // => false
//assertEqual(eqArrays(["1", "2", "3"], ["four", "2", 3]),false); // => false

//middle([1, 2, 3, 4, 5]) // => [3,4]