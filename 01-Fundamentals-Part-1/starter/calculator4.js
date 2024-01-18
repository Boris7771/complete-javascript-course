function calculate(a, b, operation) {
  let result = "undefined operation";
  a = Number(a);
  b = Number(b);
  console.log(a, b);
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case "-":
      result = a - b;
      break;
    case "/":
      result = a / b;
      break;
    case "*":
      result = a * b;
      break;

    default:
      break;
  }
  return a + " " + operation + " " + b + " = " + result;
  // 1 + 2 = 3
}
console.log(calculate(2, 5, "-"));
console.log(calculate(1, 2, "+"));
console.log(calculate(7, 7, "/"));
console.log(calculate(5, 5, "*"));
console.log(calculate(3, 5, ""));
console.log(calculate(56, "9", "+"));
