// reflect is a function that takes a function and returns a new function that behaves the same as the original function, except that it can be invoked with a variable number of arguments, not just the fixed number of arguments as defined in the original function definition.

const person = {};

Reflect.set(person, "firstName", "Daffa");
Reflect.set(person, "lastName", "Haidar");

console.info(person);

console.info(Reflect.get(person, "firstName"));
console.info(Reflect.get(person, "lastName"));

console.info(Reflect.has(person, "firstName"));
console.info(Reflect.has(person, "middleName"));
console.info(Reflect.has(person, "lastName"));
