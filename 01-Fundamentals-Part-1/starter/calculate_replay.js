function calculate(a, b, operator) {
  const obj = {
    "*": (a, b) => a * b,
    "+": (a, b) => a + b,
    "/": (a, b) => a / b,
    "-": (a, b) => a - b,
    "%": (a, b) => a % b,
    "**": (a, b) => a ** b,
  };
  console.log(operator);
  console.log(obj[operator](a, b));

  return obj[operator](a, b);
}
let ret = calculate(4, 5, "+");
console.log(ret);
