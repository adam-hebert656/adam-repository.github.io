/*
 * VARIABLES:
 *
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.
 * Variables are named identifiers that can point to values of a particular type, like a 
 * Number, String, Boolean, Array, Object or another data-type.  Variables are called so 
 * because once created, we can CHANGE the value (and type of value) to which they point.
 *
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 *
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration //
var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable. We cannot do this with constants
var myVariable = 1;
var myVariable = true;
myVariable = "someString";

/*
 * VARIABLE SCOPE:
 * Variables are hoisted to the top of the function in which they are defined,
 * OR if not defined in a function, variables are hoisted to the global scope
 */
var myVar = "Hello!"; // This is a global variable, defined outside a function

function test() {
    var myVar2 = "Goodbye!"; // This variable is only accessible within the function 
}

// The convention for naming variables is using "camelcase", which looks like this:
var camelCase;

/* With the release of ECMAscript 6, there are two new keywords for declaring variables: 
 * "let" and "const"
 *
 * let declares a varible in a similar way to var, and can be reassigned the same way.
 *
 * HOWEVER, variables defined with let are NOT hoisted to the top of a function, and are 
 * instead block-scoped, meaning they can only be accessed within the block they are defined.
 * (A block is the code within a function, or if statement, or while statement, etc.)
 *
 * You can declare a variable with let like this:
 */
let variableName = "Me";

/* 
 * const is a new keyword used to declare constant variables. These CANNOT be reassigned, 
 * and, similarly to let, are block-scoped. 
 * 
  * You use const like so:
 */
const constantValue = 42;

