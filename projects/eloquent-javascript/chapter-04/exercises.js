////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step = ( (start > end) ? -1 : 1) ) {
  /* I used a ternery operator in the parameters to set a default "step"
  * based on whether "start" was greater than "end".
  */
  
  // declare an empty array
  var resArray = [];
  
  // if start and end are the same number, return an empty array
  if (start === end) {
    return resArray;
  }
  
  // if given a positive step, add step until i is greater than or equal to end
  if (step > 0) {
    for (let i=start; i <= end; i += step) {
      
      // push i into the array
      resArray.push(i);
    }
    
  // if given a negative step, add step until i is less than or equal to end
  // NOTE: adding negative numbers is the same as subtracting
  } else if (step < 0) {
    for (let i=start; i >= end; i += step) {
      
      // push i into the array
      resArray.push(i);
    }
  }
  
  // return the array
  return resArray;
}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  
  // declare a var called total
  var total = 0;
  
  // use a for loop to iterate over the given array
  for (let i=0; i < array.length; i++){
    
    // add the value at index i to the total
    total += array[i];
  }
  
  // return total
  return total;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  
  // declare an empty array
  var reversed = [];
  
  // use a for loop to iterate backwards through the array
  for (let i = (array.length - 1); i >= 0; i--){
    
    // push the value at index i into the new array
    reversed.push(array[i]);
  }
  
  // return the reversed array
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  
  // use a for loop to iterate through half the array
  for (let i = 0; i < Math.floor(array.length/2); i++) {
    
    // store the value at i in a variable
    let value = array[i];
    
    // delete the value at i and replace it with the value at its mirror
    array.splice(i, 1, array[array.length - 1 - i]);
    
    // add the value to the mirror position
    array[array.length - 1 - i] = value;
  }
  
  // return the array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // assign list to null (since the last node points to null)
  let list = null;
  
  // iterate through the array, backwards
  for (let i = array.length - 1; i >= 0; i--) {
    
    // reassign list to an object containing value from array, and the rest of list
    list = {value: array[i], rest: list};
  }
  
  // return list
  return list;
}
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // declare an empty array
  let arr = [];
  
  // use a for loop to iterate through the list
  // Start by making a variable "node" equal to the list object
  // The stopping condition is node == false, which happens when node = null
  // The iteration is reassigning node to the "rest" property, which contains the rest of the list
  for (let node = list; node; node = node.rest) {
    
    // push the value at the current node into the array
    arr.push(node.value);
  }
  
  // return the array
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // Take a value, create a new object with value: "value", and rest: "list"
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  // if list is empty/doesnt exist, return undefined
  if (!list) return undefined;
  
  // if n = 0 (i.e. we reached the nth value on the list), return the value
  else if (n == 0) return list.value;
  
  // otherwise, recurse nth with the n count decremented by 1
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(val1, val2) {
  // check if both values are objects
  if (typeof val1 === "object" && typeof val2 === "object"){
    
    // check if either value is null
    if (val1 === null || val2 === null) {
      
      // if so, compare them to make sure they aren't both null
      return val1 === val2;
      
    // if neither is null, do the deep comparison
    } else {
      
      // declare two variables to hold an array of keys from the objects
      let arr1 = Object.keys(val1);
      let arr2 = Object.keys(val2);
      
      // declare a true or false variable
      var result = true;
      
      // use a for loop to iterate over the first array
      for (let i=0; i < arr1.length; i++){
        
        // set the value of arr1[i] to a variable
        let arr1Value = arr1[i];
        
        // use a for loop to iterate over the second array
        for (let j=0; j < arr2.length; j++) {
          
          // set the value of arr2[i] to a variable
          let arr2Value = arr2[i];
          
          // if the two values are equal, set result to true
          if (arr1Value === arr2Value) {
            result = true;
            j = arr2.length;
          } else result = false;
        }
      }
      
      if (result === false) return false;
      
      else if (result === true) {
        for (let keys in val1) {
          
        }
      }
    }
    
    
  // if they are not both objects, run a normal comparison   
  } else {
    return val1 === val2;
  }
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
