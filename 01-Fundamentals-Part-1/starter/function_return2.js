function purchase(qtyPotatoes, pricePotatoes, qtyZuchini, priceZuchini) {
  const moneyNeeded = qtyPotatoes * pricePotatoes + qtyZuchini * priceZuchini;
  return `You need: ${moneyNeeded} bgn`;
}
const monday = purchase(5, 2.99, 6, 7.55);
console.log(monday);
const tuesday = purchase(2, 2.99, 4, 6.99);
console.log(tuesday);
