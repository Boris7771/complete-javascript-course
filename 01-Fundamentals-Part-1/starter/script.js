const string1 = "I'm";
const string2 = "My job is";
let myName = "Pencho";
const myJob = "coder";
const concat = string1 + " " + myName + ". " + string2 + " " + myJob + ".";

console.warn(concat);
myName = "Bobby";
const literal = `${string1} ${myName}. ${"My job is"} ${myJob}.`;
console.log(literal);
