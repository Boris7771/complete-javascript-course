const reservoir = 45;
let availability = 5;
let litersPer100Km = 2;
const destinationKm = 1000;
const litersToDestination = (litersPer100Km * destinationKm) / 100;
console.log(Math.ceil(litersToDestination), "needed for the trip");
const litersNeeded = Math.ceil(litersToDestination);
if (reservoir > litersNeeded) {
  console.log(litersNeeded - availability, "liters on station");
} else {
  console.log("reservoir is too small");
}
