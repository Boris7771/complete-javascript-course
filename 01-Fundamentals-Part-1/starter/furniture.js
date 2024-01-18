const furniture = [
  ["table", "11.99 $"],
  ["chair", "20.00 $"],
  ["wardrobe", "450.00 $"],
  ["bedroom", "388.99 $"],
];
function selectFurniture(num, num2) {
  return furniture[num][num2];
}
console.log(selectFurniture(2, 0));
console.log(furniture[2][0]);
