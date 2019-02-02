/* Operators are symbols that tell Javascript to perform some action.
 * These include, but are not limited to, the basic mathematic operators such as
 * + for addition, - for subtraction, * for multiplication, and / for division.
 * In addition to basic math operators, there are many other different types.
 */
 
 // Arithmetic Operators
 // These operators are used to do basic math on values and variables.
 
 // Addition: +
 // Adds two values
 2 + 2;
 
 // Subtraction: -
 // Subtracts two values
 2 - 2;
 
 // Multiplication: *
 // Multiplies two values
 2 * 2;
 
 // Division: /
 // Divides two values
 2 / 2;
 
 // Modulus/Remainder: %
 // Divides two values and evaluates to the remainder
 2 % 2; // Evaluates to 0
 3 & 2; // Evaluates to 1
 
 // Assignment Operators
 // These operators are used to assign values to a variable
 
 // Basic assign: =
 // This assigns a value to a variable
 var value3 = 50; // value3 is now 50
 
 // Addition/Assign: +=
 // This adds a value to the variable and then assigns the variable to the sum
 value3 += 5; // value3 is now 55
 
 // Subtract/Assign: -=
 // This subtracts a value to the variable and then assigns the variable to the new number
 value3 -= 10; // value3 is now 45
 
 // Multiply/Assign: *=
 // This mulitplies a value to the variable and then assigns the variable to the product
 value3 *= 2; // value3 is now 90
 
 // Divide/Assign: /=
 // This divides a variable by the value given then assigns the variable to the new value
 value3 /= 10; // value3 is now 9
 
 // Modulus/Assign: %=
 // This does the same thing as modulus, and then assigns the remainder to the variable
 value3 %= 3; // value3 is now 0
 
 /* The next two operators can be consider both assignment and arithmetic operators,
     since they do both at the same time. */
 
 // Increment: ++
 // Adds 1 to a value and then assigns the sum to the variable.
 var value = 42;
 value++; // Evaluates to 43
 
 // Decrement: --
 // Subtracts 1 to a value and then assigns the difference to the variable.
 var value2 = 42;
 value2--; // Evaluates to 41
 
 // Comparison Operators
 /** These operators compare two values in some way and then resolve into a boolean.
  * They do not "return" a value because, as an expression, the interpreter evaluates
  * the expression and then resolves it to a boolean. In a sense, the expression can
  * be seen as representing the primative value.
  */
 
 // (loose) Equal to: ==
 /** This checks if the two values are equal. If they are not the same data type, 
  *  the interepreter will attempt to coerce the values into the same data type.
  *  This can lead to many unforseen errors if you're not careful.
  */
 
 42 == 6; // Evaluates to false
 "42" == 42; // Evaluates to true
 
 // (strict) Equal to: ===
 // This checks if the two values are equal and of the same type.
 32 === 32; // Evaluates to true
 
 // (loose) Not equal: !=
 /** This checks if the two values are NOT equal. If they are not the same data type, 
  *  the interepreter will attempt to coerce the values into the same data type.
  *  This can lead to many unforseen errors if you're not careful.
  */
 55 != 65; // Evaluates to true
 "55" != 55; // Evaluates to false
 
 // (strict) Not equal to: !==
 // This checks if the two values are NOT equal OR not equal type
 55 !== 55; // Evaluates to false
 "55" !== 55 // Evaluates to true
 
 // Greater than: >
 // Checks if the value on the left is greater than the value on the right
 42 > 5; // Evaluates to true
 
 // Less than: <
 // Checks if the value on the left is less than the value on the right
 42 < 5; // Evaluates to false
 
 // Greater than or equal to: >=
 // Checks if the value on the left is greater than the right, OR equal
 45 >= 45; // Evaluates to true
 
 // Less than or equal to: <=
 // Checks if the value on the left is less than the right, OR equal
 55 <= 43; // Evaluates to false
 
 // Logical Operators
 // These operators are used to determine basic logic 
 
 // AND: &&
 // Checks if two (or more) expressions are true. Both must be true to evaluate to true
 (42 > 55) && (6 === 7); // Evaluates to false
 
 // OR: ||
 // Checks if either one OR the other expressions are true. Only one must be true.
 (42 > 55) || (6 === 7); // Evaluates to true
 
 // NOT: !
 // Evaluates to the opposite of the expression's truthiness
 !(45 > 55); // Evaluates to true
 
 // Unary Operators
 // These are operators with only one operand/value.
 
 // delete
 // This deletes an object, object property, or a value in an array
 var myObject = {key: "hello"};
 delete myObject.key; // Deletes the "key" property
 //or
 var myArray = [45, 46, 47];
 delete myArray[1]; // Deletes 46, the value at index 1
 
 // typeof
 // This returns the data type of a specific value
 typeof "Adam"; // Returns "string"
 typeof 42; // Returns "number"
 typeof true; // Returns "boolean"
 typeof myArray; // Returns "array"
 //etc.
 
 // in
 // This returns true or false depending on if the property is in the object/array
 var myObjectTwo = {
     name: "Adam",
     age: 24
 }
 "name" in myObjectTwo; // Returns true
 "height" in myObjectTwo; // Returns false
 
 // instanceof
 // Returns true or false depending on if the specified object is an instance of an object type
function Band(name, members, genre) {
 this.name = name;
 this.members = members;
 this.genre;
}

var papaWatzke = new Band("Papa Watzke", ["Adam", "Luke", "Chris"], "???");

papaWatzke instanceof Band; //evaluates to true
poppaWatake instanceof Band; //evaluates to false

 // Unary negation: -x
 // This returns the negation of the variable
 var myVar = 6
 -myVar; // Evaluates to -6
 
 // Unary plus: +x
 // Attempts to coerce a value into a number
 +"5"; // Evaluates to the number 5
 +true; // Evaluates to the number 1
 
 // Conditional/Ternary Operator
 // The conditional operator is essentially a short-form if statment. 
 // Syntax: (condition) ? ifTrue : ifFalse
 // If (condition) is true, the expression will evaluate to ifTrue
 // If (condition) is false, the expression will evaluate to ifFalse
 // e.g
 console.log( (45 > 65) ? "This is true" : "This is false" ); // Prints "This is false"
 
 