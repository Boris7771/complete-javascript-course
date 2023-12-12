const hasDriversLicense = true;
const hasGoodVision = false;
const isTired = false;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Sarah is able to drive!");
} else {
  console.log("Someone else should drive...");
}

const dolphins = [96, 108, 89];
const koalas = [88, 91, 110];
const scoreDolphins = dolphins[0] + dolphins[1] + dolphins[2];
const scoreKoalas = koalas[0] + koalas[1] + koalas[2];
console.log(scoreDolphins);
console.log(scoreKoalas);
if (scoreDolphins > scoreKoalas) {
  console.log("dolphins win the trophy");
} else if (scoreDolphins < scoreKoalas) {
  console.log(`koalas win the trophy`);
} else {
  console.log("both win the trophy");
}
