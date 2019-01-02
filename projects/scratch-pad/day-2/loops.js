// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  // Use a for loop to iterate over an array
  for (let i = 0; i < array.length; i++) {
  // console log value at array[i]
    console.log(array[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  // Use a for loop to iterate over an array backwards
  for (let i = array.length - 1; i >= 0; i--) {
  // console log value at array[i]
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  // Use a for in loop to iterate over keys in an object
  for (let key in object) {
  // Console log object[key]
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Declare an empty array to store the keys in
  let result = [];
  // Use a for in loop to iterate over keys in an object
  for (let key in object) {
  // Use .push on result to push the key into the array
    result.push(key);
  }
  // Return the result array
  return result;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  // Use a for in loop to iterate over keys in an object
  for (let key in object) {
  // Console log key
    console.log(key);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  // Declare a variable called count equal to zero
  let count = 0;
  // Use a for in loop to iterate over keys in an object
  for (let key in object) {
  // Increment count for each key in the object
    count++;
  }
  // Return the count
  return count;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  // Declare a variable with an empty array
  let result = [];
  // Use a for in loop to iterate over keys in an object
  for (let key in object) {
  // Push each key value into the array
    result.push(object[key])
  }
  // Use a for loop to iterate backwards over the array of key values
  for (let i = result.length - 1; i >= 0; i--) {
  // Print each value
  console.log(result[i]);
  }
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}