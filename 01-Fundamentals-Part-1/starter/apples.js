function apples(name, qty) {
  console.log(qty > 1 ? "aplles" : "apple");
  return name + " eat " + (qty > 1 ? "aplles" : "apple");
}

console.log(apples("Grisho", 6));
console.log(apples("Pesho", 1));
