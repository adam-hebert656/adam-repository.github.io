/**
 * Control flow is the act of using conditional statements and dynamic variables
 * to determine how a program flows. A program is read line-by-line, however
 * certain statements and keywords will allow the program to jump back and forwards
 * through the code to other lines in other parts of the code. 
 *
 * Some examples of ways to manipulate control flow include:
 * -Code blocks: These allow you to group statements to either use and reuse later
 *               or to execute (or prevent) code if a certain condition is met.
 * -Conditional Statements: These statments check if a condition is true or false
 *                          and then execute a code block accordingly.
 * 
 * There are a few different types of conditional statements:
 */

/*
 * IF STATEMENTS
 *
 * If statements simply check if a condition is true, and runs a code block if so
 *
 * e.g.
 */
if (45 >= 23) {
    console.log("This is true!");
}

/*
 * ELSE-IF
 *
 * We can add additional conditions by using else if.
 *
 * e.g.
 */
if (45 >= 23) {
    console.log("This is true!");
} else if (45 < 33) {
    console.log("This is false!");
}

/* 
 * ELSE
 *
 * We can set a default code block to run if no conditions are true using else
 *
 * e.g.
 */
if (45 >= 23) {
    console.log("This is true!");
} else if (45 < 33) {
    console.log("This is false!");
} else {
    console.log("Nothing is true!");
}

/*
 * NOTE: When using if / else-if / else statements, only ONE BLOCK runs.
 * The first condition to be true will run, all other will be ignored.
 */

/* 
 * SWITCH STATEMENTS
 *
 * We can also use switch statements to set a specific list of conditions.
 * Switch statements are similar to an if statement but they do not check for 
 * booleans. They instead check for specific values against a list of cases, 
 * and then run the code set to that specific case.
 * This can be really useful when you know exactly what you should be testing for.
 * e.g.
 */
var test = "Adam";

switch (test) {
    case "Adam":
        console.log("Hi, Adam!");
        break; // break tells the program to stop running the switch statement
        // Without break, the next case(s) will run in addition to the first one
    case "Brad":
        console.log("Hi, Brad!");
        break;
    case "Chris":
        console.log("Hi, Chris!");
        break;
    case "Mom": // You can also make multiple cases run the same block
    case "Dad":
        console.log("Hey, parents!");
        break;
    default: // default sets a default condition in the same way as else does
        console.log("Hi, whoever!");
        break;
}