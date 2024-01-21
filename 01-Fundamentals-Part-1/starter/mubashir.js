function greeting(name) {
  let name2 = name[0].toUpperCase() + name.slice(1).toLowerCase();
  if (name2 === "Mubashir") {
    return "Hello my love!";
  } else {
    return "Hello " + name2;
  }
}

console.log(greeting("MUBASHIR"));
console.log(greeting("nidal"));
console.log(greeting("AhMeD"));
