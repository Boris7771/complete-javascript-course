function greeting(name, greeting) {
  switch (greeting) {
    case "hi":
      return "hi " + name;
      break;
    case "bye":
      return "Good bye " + name;
      break;
    default:
      break;
  }
}
console.log(greeting("Petkan", "bye"));
