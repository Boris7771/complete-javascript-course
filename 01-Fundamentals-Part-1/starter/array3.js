const pork = [50, 60, 70];
let firstValue = pork[1];
console.log(firstValue);
pork[1] = "333";
console.log(pork);
console.log(pork[1]);
let str = "hipermax";
str[2] = "b";
console.log(str[2]);
str = "hibermax";
console.log(str);

const megaArray = [[23], [33], [727, "Baba"], "falafel", 7];
console.log(megaArray[1]);
megaArray[1] = ["Kebabche", "Burger"];
console.log(megaArray);
console.log(megaArray[1][0]);
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[3][0][2];
console.log(myData);

const botle = "  coca-cola";
console.log(botle.toLocaleUpperCase());
