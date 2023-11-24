let availabilityPhones = 50;
console.log(availabilityPhones, "availability start of the week");
const priceForPhone = 110.5;
const myCost = 50;
const profitPerPhoneSold = priceForPhone - myCost;
console.log(profitPerPhoneSold, "net profit");
const soldMondeyQty = 19;
const soldTuesdayQty = 7;
const soldWednesdayQty = 8;
const soldTursdayQty = 5;
const soldFridayQty = 5;
const weeklySalesQty =
  soldMondeyQty +
  soldTuesdayQty +
  soldWednesdayQty +
  soldTursdayQty +
  soldFridayQty;
console.log(weeklySalesQty, "weekly sales Qty");
const weeklyProfit = weeklySalesQty * profitPerPhoneSold;
console.log(weeklyProfit, "weekly net profit.");
availabilityPhones = availabilityPhones - weeklySalesQty;
console.log(availabilityPhones, "availability phones end of the week");
