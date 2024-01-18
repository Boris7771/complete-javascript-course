const food = {
  milk: "1.99$",
  bread: "1.29$",
  zucini: "2.86$",
  picles: "0.99$",
  tomato: "1.69$",
  onion: "0.56$",
  mashroom: "1.99",
  iceberg: "3.00$",
  cheese: "9.88$",
  kickumber: "0.88$",
  gebich: "1.36$",
  ketchup: "1.66$",
  sugar: "1.20$",
  salt: "1.19$",
  oil: "2.20$",
  "steak pork": "5.90$",
  "sheep steak": "4.50$",
  apple: "0.60$",
  bananas: "1.99$",
  grape: "1.32$",
  pineapple: "1.65$",
  raspberry: "0.89$",
  cherries: "1.20$",
};
function purchase(name, quantity) {
  console.log(name, quantity);
  let price = food[name];
  price = price.substring(0, price.length - 1);
  console.log(price);
  console.log(price * quantity);
  console.log("product " + name + " quantity " + quantity);
  console.log("unit " + price);
  console.log("amount " + 13.5);
}
// console.log("price apple " + food.apple);
// console.log("steak pork price " + food["steak pork"]);
// purchase("apple", 5);
// purchase("cheese", 7);
// purchase("sheep steak", 3);
purchase("salt", 4);
