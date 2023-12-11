function addition(x, y) {
  return x + y;
}
function substract(x, y) {
  return x - y;
}
function divide(x, y) {
  return x / y;
}
function multiply(x, y) {
  return x * y;
}
function modulo(x, y) {
  return x % y;
}
function exponent(x, y) {
  return x ** y;
}
x = 3;
y = 3;
// console.log(addition(x, y));
// console.log(divide(y, x));
// console.log(modulo(y, x));
function calculator(x, y, operator) {
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    return x / y;
  } else if (operator === "%") {
    return x % y;
  } else if (operator === "**") {
    return x ** y;
  }
}
console.log(calculator(x, y, "%"));

function calculatorSwitch(x, y, operator) {
  switch (operator) {
    case "+":
      return x + y;
    // break;break is usally used but not after return
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "divide":
      return x / y;
    case "**":
      return x ** y;
    case "%":
      return x % y;
  }
}
console.log(calculatorSwitch(x, y, "%"));
console.log(calculator(x, y, "%"));

function printResult(x, operator, y) {
  let calculationResult = calculatorSwitch(x, y, operator);
  console.log(
    `forValues ${[
      x,
      y,
    ]} and operation ${operator},result is ${calculationResult}`
  );
}
printResult(2, "*", 5);
