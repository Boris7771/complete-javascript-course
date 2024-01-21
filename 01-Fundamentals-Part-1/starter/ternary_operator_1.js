const wordIsPlural = (word) =>
  word.endsWith("s") ? word + " is plural" : word + " is singular";
console.log(wordIsPlural("Apples"));
console.log(wordIsPlural("Orange"));
