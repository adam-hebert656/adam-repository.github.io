// Loops are used to execute a block of code n number of times (n being anything)
// They are used to iterate over arrays or objects etc.
// There are three basic types of loops in Javascript
// for loop, for-in loop, and while loop

// FOR LOOP
// A for loop has 3 parts
// 1. Variable declaration
// 2. Stopping condition
// 3. Iteration
// e.g.

// FORWARDS
for (let i=0; i < 10; i++) {
    console.log('This is the count:', i);
}
// In this example, let i=0 declares a variable i to start at 0
// The stopping condition is i being equal to or greater than 10
// The iteration is i++, which adds 1 to i
// This loop will print a count up to 9, because it stops once i = 10

// BACKWARDS
for (let i=100; i >= 0; i--){
    console.log('This is the count:', i);
}
// In this example, let i=100 declares a variable i to start at 100
// The stopping condition is i being less than 0
// The iteration is i--, which subtracts 1 from i
// This loop will print a count from 100 to 0

// For loops are great for iterating over the values in arrays
// e.g.
const myArray = [23, 27, 46, 97, 273, 4747];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
} // This will iterate through the array and print each value

for (let i = myArray.length - 1; i >= 0; i--) {
    console.log(myArray[i]);
} // This will iterate through the array backwards and print each value

// FOR-IN LOOP
// A for-in loop is used to iterate through the keys of an object
// e.g.
var object = {name: "Adam", age: 24};

for (let key in object) { // "key" is just a placeholder for the properties in the object
    // You can use any variable instead of "key"
    console.log(object[key]); // To access each value, you have to use bracket notation
    // This is because "key" is a variable, and not an actual key
    console.log(key);
}

