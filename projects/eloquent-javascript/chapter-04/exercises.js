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
  // if the values are already equal, return true
  if (val1 === val2) {
    return true;
    
    // if either value is null or not an object, return false
  } if (val1 == null || typeof val1 != "object" || val2 == null || typeof val2 != "object") {
    return false;
  }
  
  // create two variables to store the keys of the objects
  let keysA = Object.keys(val1); 
  let keysB = Object.keys(val2);

  // if the two arrays are different in length, return false
  if (keysA.length != keysB.length) {
    return false;
  }
  
  // iterates through the keys in the A array
  for (let key of keysA) {
    
    // if the B array does not include the key or the two values are not the same, return false
    if (!keysB.includes(key) || !deepEqual(val1[key], val2[key])) {
      return false;
    }
  }
  
  // if everything passes, return true
  return true;
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
