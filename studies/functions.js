/* 
 * FUNCTIONS
 *
 * Functions are reusable blocks of code than can be called upon in other places
 * in a program. 
 *
 * There are two stages to making a function:
 * 
 * 1. Declaring the function, which is literally writing out the function in code
 *    and determining the parameters and code block of the function.
 *
 * 2. Executing the function, which is when a function is called upon and run in
 *    the program. This is when you pass arguments to the function.
 *
 */
 
/* DECLARING A FUNCTION
 * You declare a function in two different ways:
 *
 * 1. Function Definition: This is when you use the keyword "function" to define
 *    a named function.
 *
 * 2. Function Expression: This is when you assign an anonymous function to a variable.
 */
 
// Function Definition example:
function myFunction(arg) {
    console.log("Hello!");
}

// Function Expression example:
const anotherFunction = function(args) {
    console.log("Hello!");
}
 
/* Parameters vs. Arguments
 *
 * Parameters are defined BEFORE a function is run. It essentially defines the 
 * values that will be used within the function. They are not values themselves,
 * but rather placeholders for future values.
 *
 * Arguments are the values that are passed through a function when the function
 * is run. 
 *
 * A function does not HAVE to take any parameters. You can have a function with
 * 0 paramters and it will be perfectly fine (hopefully)!
 * 
 */

// Parameters example:
function newFunction(parameter) {
    //code here
}

// Arguments example:
newFunction("argument");


/* 
 * RETURNING A VALUE FROM A FUNCTION
 *
 * In order to get a value out of a function, you have to use the "return" keyword.
 * Once the function hits "return", it will stop running and output whatever value
 * it's designated to return.
 *
 * A function does not HAVE to return any value. A function can simply just manipulate
 * data and then end, without a return statement.
 */
function add(a, b) {
    return a + b;
}

/* 
 * FUNCTION SCOPE
 *
 * Functions can read and manipulate variables declared within its own code block
 * as well as variables in the global scope. 
 *
 * HOWEVER, this is not inversely true. Variables declared within the function 
 * are NOT accessible outside of that function. Except...
 */
 
/*
 * CLOSURES
 * 
 * A closure is essentially a function that has access to its parent scope's variables.
 * It's a function within a function.
 * In order to be a closure, the inner function MUST use a variable from the 
 * parent scope.
 * A closure has access to three different scopes, its own local scope, its 
 * parent scope, and the global scope. 
 * The closure also has access to the outer function's parameters.
 * 
 * This is useful for returning functions from functions. Because once the outer 
 * function returns and ends, the inner functions still keeps the paramters and
 * variables from the outer function alive for use whenever you call the inner function.
 *
 */
function myName(firstName, lastName) {
    var greeting = "Hello, ";
    
    function fullName() {
        // Here, we are using the greeting variable, which exists in the parent scope
        return greeting + firstName + " " + lastName;
    }
    return fullName();
}

 
/*
 * Some rules:
 * 1. A closure still has access to the parent function's variables/parameters even after
 * the outer function returns. 
 *
 * 2. A closure does not store the actual values of the outer function's variables,
 * only references to that variable. This means that any changes to that variable
 * from the closure will change that variable.
 *
 */