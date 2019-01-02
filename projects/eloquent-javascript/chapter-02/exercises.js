
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(length) {
  let tri = "";
  for (let i=0; i < length; i++) {
    tri += "#";
    console.log(tri);
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(start, end) {
    // Use a for loop to iterate from numbers 1 to 100
    for (let i = start; i <= end; i++) {
    // If the number is both a multiple of 3 and 5, print "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) console.log("fizzbuzz");
    // If the number is a multiple of 3, print "Fizz"
        else if (i % 3 === 0) console.log("fizz");
    // If the number is a multiple of 5, print "Buzz"
        else if (i % 5 === 0) console.log("buzz")
    // Otherwise, print the number
        else console.log (i);
    }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(boardSize) {
// declare an empty string
let result = "";
  // use a for loop starting at y = 1, until y > boardSize
  for (let y=1; y <= boardSize; y++){
    // if y % 2 != 0, start the line at " "
    if (y % 2 != 0) {
      // use a for loop starting at x = 1, until x > boardSize
      for (let x=1; x <= boardSize + 1; x++){
        // if x === boardSize + 1, add \n
        if (x === boardSize + 1) result += "\n";
        // if x % 2 != 0, add " " to the string
        else if (x % 2 != 0) result += " ";
        // if x % 2 === 0, add "#" to the string
        else if (x % 2 === 0) result += "#";
      }

    // if y % 2 === 0, start the line at "#"
    } else if (y % 2 === 0) {
      // use a for loop starting at x = 1, until x > boardSize
      for (let x=1; x <= boardSize + 1; x++){
        // if x === boardSize + 1, add \n
        if (x === boardSize + 1) result += "\n";
        // if x % 2 != 0, add "#" to the string
        else if (x % 2 != 0) result += "#";
        // if x % 2 === 0, add " " to the string
        else if (x % 2 === 0) result += " ";
      }
    }
  }
  console.log(result);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
