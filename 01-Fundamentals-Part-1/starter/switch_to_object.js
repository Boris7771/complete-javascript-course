function greet(name, greeting) {
  const obj = {
    bye: (name) => "bye " + name,
    hi: (name) => "hi " + name,
  };
  return obj[greeting](name);
}
console.log(greet("Petkan", "bye"));
console.log(greet("Teo", "hi"));
