// DATA TYPES are just like they sound, the type of the data you are working with.

// In Javascript, there are two "classes" of data types, SIMPLE/PRIMITIVE and COMPLEX

// SIMPLE/PRIMITIVE data includes:
// Strings (which is character data)
"This is a string";

// Numbers (which is numerical data)
42;

// Booleans (which is either true or false)
true;
//or
false;

//NaN (not a number)
NaN;

//undefined (no value)
undefined;

//null (nothing)
null;

// SIMPLE data types are simple because they are IMMUTABLE and 
// when working with simple data, the actual value is passed, not just a reference.
// This means they are "copied by value".

// COMPLEX data includes:
// Objects
{key: "hi"}
// Arrays
[42, "this is an array", true];
// And even Functions
var data = function(){
    return null;
};

// COMPLEX data types are MUTABLE, and are only referenced when passed. 
// Variables can only hold so much data, which is why complex data types are only referenced,
// because complex data types are of indefinite size.
// This means they are "copied by reference"

// Copying by Value vs. Copying by Reference:

// Copying by value literally does what it says, copies the value of data.
// e.g.
var a = 42;
var b = a; // Copies the VALUE 42 to the variable b

b += 1; // Changes the value of 42 to 43

console.log(a); // Prints 42
console.log(b); // Prints 43

// Copying by reference, on the other hand, means that the variable does not actually store
// the complex data values. Only a refence that points to the complex data's location in memory.
// This has some implications. 
var array = [42, 45, 47];
var copy = array; // This stores a REFERENCE to the array stored in "array"

copy[0] = 63; // This does not just change an array stored in "copy", but the original "array"
// This is because "copy" is just a REFERENCE to the original array
// "array" and "copy" both point to the same array
console.log(array); // Prints [63, 45, 47]
console.log(copy); // Prints [63, 45, 47]


/** 
 * There are two more special data types: Infinity and -Infinity.
 * 
 * Infinity is a global property that represents the mathematical concept of infinity.
 * -Infinity is the same, but representing negative infinity.
 * 
 * These are displayed when a number passes the built-in limit for float-point numbers,
 * (the limit being: 1.797693134862315E+308 (or - 1.797693134862315E+308 for negative)
 * or also displayed when a number passes Number.MAX_VALUE, which is 1.79E+308.
 * 
 * These act essentially the same as their real-world mathematical concepts.
 * i.e. any number multiplied by infinity is infinity
 */