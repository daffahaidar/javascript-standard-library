// symbol is a built-in object in javascript that is used to create unique identifiers for objects.
{
  const firstName = Symbol("firstName"); // create a symbol
  const lastName = Symbol("lastName"); // create a symbol

  const person = {};
  person[firstName] = "Daffa"; // set the value of the symbol to the object
  person[lastName] = "Haidar"; // set the value of the symbol to the object

  console.info(person); // print the object
}

{
  // symbol for is used to create unique identifiers for objects

  console.info(Symbol.for("firstName") === Symbol.for("firstName")); // will return true because the symbol is the same

  const person = {};
  person[Symbol.for("firstName")] = "Daffa"; // set the value of the symbol to the object
  person[Symbol.for("lastName")] = "Haidar"; // set the value of the symbol to the object

  console.info(person); // print the object
  console.info(person[Symbol.for("firstName")]); // print the value of the symbol
  console.info(person[Symbol.for("lastName")]); // print the value of the symbol
}
