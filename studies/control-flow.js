/*
 * Control flow is the act of using conditional statements to determine how a program flows
 * We can do this using a few different types of statements
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
 *
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