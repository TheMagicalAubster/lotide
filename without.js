//this would be comparing the arrays, and producing a true/false
const without = function(array1, array2) {
  if (array1.length < array2.length) {
    console.log("You can't get rid of everything...");
    return false;
  }

  let newArray = [];

  for (let i = 0; i < array1.length; i++) {
    let temp1 = array1[i];
    let flag = false;
    for (let j = 0; j < array2.length; j++) {
      let temp2 = array2[j];
      if (temp1 === temp2) {
        flag = true;
      }
    }
    if (!flag) {
      newArray.push(array1[i]);
    }
  }
   
  return newArray;
};
        
// TEST CODE
console.log(without([1, 2, 3, 5, 756], [5]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]