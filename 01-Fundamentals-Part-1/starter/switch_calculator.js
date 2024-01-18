let a = 3;
let b = 7;
let operator = "/";

switch (operator) {
  case "+":
    console.log(a + b, operator);
    break;
  case "-":
    console.log(a - b, operator);
    break;
  case "*":
    console.log(a * b, operator);
    break;
  case "/":
    if (b === 0) {
      console.log("divide to zero");
      break;
    }
    console.log(a / b, operator);

    break;

  default:
    console.log("WTF");
    break;
}
