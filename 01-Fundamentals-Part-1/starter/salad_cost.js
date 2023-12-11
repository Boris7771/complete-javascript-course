let vegetable1 = ["zuchini", [0.33, "kg"], [3.3, "lev/kg"]];
let vegetable2 = ["picles", [0.13, "kg"], [23.2, "lev/kg"]];
let vegetable3 = ["tomato", [0.43, "kg"], [10.99, "lev/kg"]];
// console.log(vegetable3[2][0] * vegetable3[1][0]);

function saladCost(prod1, prod2) {
  // console.log(prod1);
  // console.log(prod2);
  // console.log(prod1[1][0], prod1[2][0]);
  // console.log(prod2[2][0], prod2[2][1], prod2[1][0], prod2[1][1]);

  const cost = prod1[2][0] * prod1[1][0] + prod2[2][0] * prod2[1][0];
  const ingredients = `${prod1[0]} ${prod2[0]}`;
  // console.log(ingredients);
  return [parseFloat(cost.toFixed(2)), ingredients];
}

console.log(saladCost(vegetable1, vegetable3));
console.log(saladCost(vegetable1, vegetable2));
console.log(saladCost(vegetable2, vegetable3));
