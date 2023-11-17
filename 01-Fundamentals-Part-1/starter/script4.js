let shoeBrand = "Nike";
let shoeModel = "Air";
const shoeSizeEU = "42,43";
const shoeColor = "Black,White,Green,Blue,Red";
const text =
  "I have a Nike model Air. \nI use 42,43 size and perfer colors:Black,White,Green,Blue,Red";
const templateLiteral = `I have a ${shoeBrand} model ${shoeModel}.
I use ${shoeSizeEU} size and perfer colors:${shoeColor}`;
shoeBrand = "Adidas";
shoeModel = "Terrex";
const templateLiteral2 = `I have an ${shoeBrand} model ${shoeModel}.
I use ${shoeSizeEU} size and perfer colors:${shoeColor}`;
console.log(text, "\n", templateLiteral, "\n", templateLiteral2);
