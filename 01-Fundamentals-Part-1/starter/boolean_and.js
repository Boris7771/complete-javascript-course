function testLogicalAnd(val) {
  if (val <= 50) {
    if (val >= 25) {
      return "Yes";
    }
  }
  return "No";
}
console.log(testLogicalAnd(49));

function testLogicalAnd2(lok) {
  if (lok >= 25 && lok <= 50) {
    return "true";
  } else if (lok >= 1 && lok <= 50) {
    return "qual";
  }
}
console.log(testLogicalAnd2(0));
