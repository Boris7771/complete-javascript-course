function calculate(a, b, operation) {
  let result = "undefned operation";
  a = Number(a);
  b = Number(b);
  console.log(a, b);
  switch (operation) {
    case "+":
      result = a + b;
      break;
    case " -":
      result = a - b;
      break;
  }
  return result;
}
