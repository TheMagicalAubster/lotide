
const findKeyByValue = function(bestTVShowsByGenre, show) {

  for (let genre of Object.entries(bestTVShowsByGenre)) {
      
    if (genre[1] === show) {

  return genre[0];
    }
    
  }
    
    
};


const assertEqual = function(actual, expected) {

    if (actual !== expected) {
      console.log(` ${actual} !== ${expected}`);
    } else {
      console.log(` \uD83D\uDE00 ${actual}  === ${expected}`);
    }
  
  };
  
  // TEST CODE
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);