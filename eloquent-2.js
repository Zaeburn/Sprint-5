// Eloquent Javascript Chapter 2 exercise solutions

// 2.1 Looping a Triangle
var triangleOutPut = "#";
while (triangleOutPut.length <= 7) {
    console.log(triangleOutPut);
    triangleOutPut = triangleOutPut + "#";
}

// 2.2 Fizz Buzz
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