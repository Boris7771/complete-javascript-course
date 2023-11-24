const reservoir = 50;
let availability = 5;
const litersPer100Km = 5;
const destinationKm = 1000;
const litersToDestination = (litersPer100Km * destinationKm) / 100;
console.log(Math.ceil(litersToDestination), "needed for the trip");
const litersNeeded = Math.ceil(litersToDestination);
if (reservoir >= litersNeeded) {
  console.log(litersNeeded - availability, "liters on station");
} else {
  console.log("reservoir is too small");
}
// fuel loaded
const fuelAsked = 45;
const freeSpaceInReservoir = reservoir - availability;
console.log(freeSpaceInReservoir, "free space in reservoir");
if (freeSpaceInReservoir < fuelAsked) {
  availability = availability + freeSpaceInReservoir; //load fuel
  console.log(freeSpaceInReservoir, "loaded fuel");
  console.log(availability, "new availability");
} else {
  availability = availability + fuelAsked; //load fuel
  console.log(fuelAsked, "loaded fuel");
  console.log(availability, "new availability");
}

if (availability >= litersNeeded) {
  console.log("you have enough fuel for the trip");
} else {
  console.log("Not enough fuel for the trip");
}
