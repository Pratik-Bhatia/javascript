//faulty calculator
let a = parseFloat(prompt("Enter a number")); // Using parseFloat to accept decimal numbers
let b = parseFloat(prompt("Enter a number")); // Using parseFloat to accept decimal numbers
let c = prompt("Enter an operator");

// Introduce randomness to determine whether the result will be correct
const isCorrect = Math.random() < 0.1; // 10% chance of being correct

switch (c) {
  case "+":
    if (isCorrect) {
      console.log(a + b);
    } else {
      console.log(a - b); // Intentional error: Subtracting instead of adding
    }
    break;
  case "-":
    if (isCorrect) {
      console.log(a - b);
    } else {
      console.log(a * b); // Intentional error: Multiplying instead of subtracting
    }
    break;
  case "*":
    if (isCorrect) {
      console.log(a * b);
    } else {
      let result = a * b;
      if (result > 100) {
        console.log("The result is " + (result - 10)); // Intentional error: Subtracting 10 from the result
      } else {
        console.log(result);
      }
    }
    break;
  case "/":
    if (isCorrect) {
      console.log(a / b);
    } else {
      console.log(a ** b); // Intentional error: Exponentiation instead of division
    }
    break;
  default:
    console.log("Invalid choice");
}
