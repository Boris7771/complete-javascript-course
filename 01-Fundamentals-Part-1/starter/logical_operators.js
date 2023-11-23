// let b = 10;
// console.log(10 === 10);
// console.log(10 === "10");
// // console.log(b > 5);
// // console.log(b < 10);
// console.log(10 == 10);
// console.log(10 == "10");
// console.log(undefined == null);

// // console.log(undefined === null);
// console.log(NaN == null);
// console.log("baabb" > "All");
let bankAcount = 1000;
const amount = 2000;
if (bankAcount > amount) {
  bankAcount = bankAcount - amount;
  console.log("money left!", bankAcount);
} else {
  console.log(`you have ${bankAcount},but want to take ${amount} "f*** off"`);
}
