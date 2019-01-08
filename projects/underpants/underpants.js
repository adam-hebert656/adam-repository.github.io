// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

identity: (value) => value,

/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

typeOf: (value) => {
    if (typeof value === 'string') return "string";
    else if (typeof value === 'number') return 'number';
    else if (typeof value === 'boolean') return 'boolean';
    else if (typeof value === 'function') return 'function';
    else if (typeof value === 'undefined') return 'undefined';
    else if (Array.isArray(value)) return 'array';
    else if (value === null) return 'null';
    else if (value instanceof Date) return 'date';
    else if (typeof value === 'object') return 'object';
},

/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

first: (array, num) => {
  let result = [];
  if (!Array.isArray(array) || num < 0) return [];
  else if (typeof num !== "number" || num === 1) return array[0];
  else {
        if (num > array.length) {
          for (let i=0; i < array.length; i++){
            result.push(array[i]);
          }
      } else {
          for (let i=0; i < num; i++) {
              result.push(array[i]);
          }
      }
  }
  return result;
},

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

last: (array, num) => {
    let result = [];
    if (!Array.isArray(array) || num < 0) return [];
    if (typeof num !== "number") return array[array.length - 1];
    else {
        if (num > array.length) {
            for (let i=0; i < array.length; i++) {
                result.push(array[i]);
            }
        } else {
            for (let i = num; i > 0; i--) {
            result.push(array[array.length - i]);
        }
        }
    }
    return result;
},

/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

indexOf: (array, value) => {
    for (let i=0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
},


/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

contains: (array, value) => {
    let testVal;
    for (let i=0; i < array.length; i++) {
        if (array[i] === value) {
            testVal = value;
        }
    }
    return testVal === value ? true: false;
},

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

each: (collection, func) => {
    if (Array.isArray(collection)) {
        for (let i=0; i < collection.length; i++) {
            func(collection[i], i, collection);
        }
    } else if (typeof collection === "object") {
        for (let key in collection) {
            func(collection[key], key, collection);
        }
    }
},

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

unique: (array) => {
    // declare an empty result array
    let result = [];
    // declare an empty test/index array
    let indexes = [];
    // use a for loop to get indexOf for each element
    for (let i=0; i < array.length; i++) {
    // push the indexOf if the index array doesnt already contain that index
        if (!_.contains(indexes, _.indexOf(array, array[i]))) {
            indexes.push(_.indexOf(array, array[i]));
        }
    }
    // use a for loop on the index array and push the value at each index into the result array
    for (let i=0; i < indexes.length; i++) {
        result.push(array[indexes[i]]);
    }
    // return the result array
    return result;
},


/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

filter: (array, func) => {
  // declare a result array
  let result = [];
  // use a for loop to iterate through given array
  for (let i=0; i < array.length; i++) {
  // check if the result of the function is a boolean
      if (typeof func(array[i], i, array) === 'boolean') {
  // call the func on each value in array and if true, push the value into the result array
          if (func(array[i], i, array) === true) {
              result.push(array[i]);
          }
      }
  }
  // return result array
    return result;
},

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

reject: (array, func) => {
    // declare a result array
    let result = [];
    // declare a testing array that comes from running _.filter on the array
    let testing = _.filter(array, func);
    // compare the values of the given array to the testing array
    for (let i=0; i < array.length; i++) {
    // push each value that isn't in the testing array into the result array
        if (!_.contains(testing, array[i])) {
            result.push(array[i]);
        }
    }
    // return the result array
    return result;
},

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

partition: (array, func) => [_.filter(array, func), _.reject(array, func)],

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

map: (collection, func) => {
    // declare a empty result array
    let result = [];
    // check if the collection is an array
    if (Array.isArray(collection)) {
        // loop through the array
        for (let i=0; i < collection.length; i++) {
            // run the function on each element and push it into the result array
            result.push(func(collection[i], i, collection));
        }
    // check if collection is an object
    } else if (typeof collection === 'object') {
        // loop through the object keys
        for (let key in collection) {
            // run the function on each element and push it into the result array
            result.push(func(collection[key], key, collection));
        }
    }
    // return the result array
    return result;
},

/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

pluck: (array, prop) => _.map(array, (obj) => obj[prop]),

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

every: (collection, func) => {
    if (func === undefined) {
        if (Array.isArray(collection)) {
            for (let i=0; i < collection.length; i++) {
                if (!collection[0]) {
                    return false
                }
            } return true;
        } else if (typeof collection === 'object') {
            for (let key in collection) {
                if (!collection[key]) {
                    return false
                }
            } return true;
        }
    } else {
        let result = []
        if (Array.isArray(collection)) {
            result = _.filter(collection, func);
            return result.length === collection.length;
        } else if (typeof collection === 'object') {
            for (let key in collection) {
                if (!func(collection[key], key, collection)) {
                    return false;
                }
            } return true;
        }
    }
},

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

some: (collection, func) => {
    if (func === undefined) {
        if (Array.isArray(collection)) {
            for (let i=0; i < collection.length; i++) {
                if (collection[0]) {
                    return true
                }
            } return false;
        } else if (typeof collection === 'object') {
            for (let key in collection) {
                if (collection[key]) {
                    return true
                }
            } return false;
        }
    } else {
        let result = []
        if (Array.isArray(collection)) {
            result = _.filter(collection, func);
            return result.length !== 0;
        } else if (typeof collection === 'object') {
            for (let key in collection) {
                if (func(collection[key], key, collection)) {
                    return true;
                }
            } return false;
        }
    }
},

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

reduce: (array, func, seed) => {
    // declare a result variable
    var result;
    // declare a prevRes variable
    var prev;
    // use a for loop to iterate over the array
    for (let i=0; i < array.length; i++) {
    // on first iteration, use seed as previous result, unless no seed was given, then use the first value in array
        if (i === 0) {
            // if a seed is given
            if (seed !== undefined) {
                // use seed as the previous value
                prev = func(seed, array[0], 0);
            // if no seed is given
            } else {
                // use the first value in array as the previous value
                prev = func(array[0], array[1], 1);
                i += 1;
            }
        // on every iteration but the last, store the result of the func call into prev
        } else if (i < array.length - 1) {
            prev = func(prev, array[i], i);
        } else if (i === array.length - 1) {
    // store the last iteration result into result
            result = func(prev, array[i], i);
        }
    }
    // return result
    return result;
},

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

extend: function(object1, object2) {
    // create an array of all the arguments passed to extend
    let args = [].slice.call(arguments);
    
    // create a variable pointing to object1
    let resObj = object1;
    
    // use a for loop to iterate through the args array (skipping the first one)
    for (let i=1; i < args.length; i++) {
        
    // use a for loop to iterate through the keys in each object
        for (let key in args[i]) {
        // copy the keys to object1
            resObj[key] = args[i][key];
        } 
        
    }
    // return object1
    return resObj;
}


};
//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
