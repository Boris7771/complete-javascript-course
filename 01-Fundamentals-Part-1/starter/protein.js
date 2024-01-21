function protein(name) {
  const nameCorrect = name[0].toUpperCase() + name.slice(1).toLowerCase();
  console.log(nameCorrect);
  if (nameCorrect === "Gym whey") {
    return "Increase of body-weight " + nameCorrect;
  } else {
    return "To lose  body-weight " + nameCorrect;
  }
}

console.log(protein("Gym Whey"));
console.log(protein("El CreaTInE"));
