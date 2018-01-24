// Eloquent Javascript Chapter 2 exercise solutions

// 2.1 Looping a Triangle

var triangleOutPut = "#";
while (triangleOutPut.length <= 7) {
    console.log(triangleOutPut);
    triangleOutPut = triangleOutPut + "#";
}

// 2.2 FizzBuzz

for (number = 1; number <= 100; number++) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz");
    } else if (number % 3 === 0) {
      console.log("Fizz");
    } else if (number % 5 === 0) {
      console.log("Buzz");
    } else
    console.log(number);
  }

// 2.3 ChessBoard

var chessBoard = "";
var size = 8;

// <outer loop> loop lines
for (line = 1; line <= size; line++) {
	// <inner loop> loop characters on line
	for (character = 1; character <= size; character++)
    {
      if ((character + line) % 2)
        chessBoard = chessBoard + "#";
      else
        chessBoard = chessBoard + " ";
    }
	// </inner loop>
  // add a new line
  chessBoard = chessBoard + "\n"
}
// </outer loop>

// log chessBoard variable string to console
console.log(chessBoard);