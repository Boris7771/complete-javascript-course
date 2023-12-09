function calc(x) {
  return [
    ["plusFive", x + 5],
    ["minusFive", x - 5],
  ];
}
function calc2(x) {
  console.log([
    ["plusFive", x + 5],
    ["minusFive", x - 5],
  ]);
}

console.log(calc(5));
let calculation = calc(5);
console.log(calculation);
console.log(calc2(3));
