// var readlineSync = require("readline-sync");
var RL = readline.createInterface(process.stdin, process.stdout);

RL.question("Name: ", (user) => {
  console.log("Hello" + user + "let's get Mathical!");
});
// var user = readlineSync.question("Name:");
// console.log("Hello" + user + "let's get Mathical!");

var num1 = parseInt(RL.question("Please Enter the first number "));
var num2 = parseInt(RL.question("Next, Enter the second number "));
const operator = prompt("Enter operator ( either +, -, * or / ): ");

let result;

if (operator == "+") {
  result = num1 + number2;
} else if (operator == "-") {
  result = num1 - number2;
} else if (operator == "*") {
  result = num1 * number2;
} else {
  result = num1 / number2;
}

// var selection = RL.question("");
// function addition(num1, num2) {
//   var sum = num1 + num2;
//   console.log(sum);
// }
