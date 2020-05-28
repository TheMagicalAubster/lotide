const eqObjects = function(object1, object2) {
  console.log(Object.keys(object1).length);
  console.log(Object.keys(object2).length);

  console.log(`This is an object key of object 2: ${Object.keys(object2)}`); //this is how you go through the keys
  console.log(`This is the value of the object key 'b' in object 2: ${object2['c']}`); //this is how you find the values at key ["keyName"]

  //first if the object lengths are different, then the objects are different
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;

  } else {
   
    for (let key of Object.keys(object1)) {
      let valueObj1 = object1[key];
      let valueObj2 = object2[key];
            
      //if array, then use equal arrays function, otherwise compare as normal
      if (Array.isArray(valueObj1) || Array.isArray(valueObj2)) {
      
        console.log(`confirmed that valueObj1 or 2 is array ${valueObj1}, ${valueObj2}`);

        //calling function eqArrays to see if the arrays are equal, if true, continue
        if (eqArrays(valueObj1, valueObj2)) {
          console.log(`valueObj1 is ${valueObj1}`);
          return true;

        } else {
          if (valueObj1 !== valueObj2) {
            return false;
          }
        }
      }
    }
    return true;
  }

};

//eqArrays checks that the arrays are equal length first, then that the array values match
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

//assertEqual looks to see if what you expect is what you're going to get
const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      console.log(` ${actual} !== ${expected}`);
    } else {
      console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
    }
  
  };
  
  // TEST CODE
  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };

  assertEqual(eqObjects(cd, dc), true); // => true
  
//   const cd2 = { c: "1", d: ["2", 3, 4] };
//   assertEqual(eqObjects(cd, cd2), false); // => false



//   const ab = { a: "1", b: "2" };
//   const ba = { b: "2", a: "1" };
//     assertEqual(eqObjects(ab, ba), true);
    
//     const abc = { a: "1", b: "2", c: "3" };
//     assertEqual(eqObjects(ab, abc), false);




