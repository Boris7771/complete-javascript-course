const myLaptopBrand = "HP";
const myDisplayResolution = "FHD";
const myLaptopRam = "16 GB";
const myLaptopKeyboard = "qwerty";
let myLaptopBatteryNow = "36%";
const sentence =
  "My laptop characteristics are: \n -brand HP \n -resolution FHD \
  \n -RAM: 16 GB\
   \n -keyboard: QWERTY \n -battery now: 40%";
myLaptopBatteryNow = "44%";
const sentence3 = `My laptop characteristics are: 
 -brand ${myLaptopBrand}
 -resolution ${myDisplayResolution} 
 -RAM: ${myLaptopRam}
 -keyboard: ${myLaptopKeyboard.toUpperCase()} 
 -battery now: ${myLaptopBatteryNow}`;
console.log(sentence3);

console.log(sentence);
myLaptopBatteryNow = "36%";
const sentence2 =
  "My laptop characteristics are: \n -brand " +
  myLaptopBrand +
  " \n -resolution " +
  myDisplayResolution +
  " \
  \n -RAM:" +
  myLaptopRam +
  "\
   \n -keyboard: " +
  myLaptopKeyboard.toUpperCase() +
  " \n -battery now: " +
  myLaptopBatteryNow;

console.log(sentence2);
