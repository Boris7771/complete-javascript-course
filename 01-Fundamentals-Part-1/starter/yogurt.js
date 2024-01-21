function yogurt(name, brand, quantity) {
  console.log(name, brand, quantity);
  return (
    name[0].toUpperCase() +
    name.slice(1).toLowerCase() +
    " eat " +
    quantity +
    " yogurts " +
    brand
  );
}
const irina = "irina";
const mila = "mila";
console.log(yogurt(irina, mila, 5));

console.log(yogurt("MIRO", "borchvor", 24));
