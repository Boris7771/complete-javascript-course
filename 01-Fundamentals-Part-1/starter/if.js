let age = 18;
let isOldEnough = age >= 18;
console.log(age, isOldEnough);

age = age - 2;
isOldEnough = age >= 18;
console.log(age, isOldEnough);

console.log((age += 5));
if (age >= 18) {
  console.log(age);
} else {
  console.log("else", age);
}
