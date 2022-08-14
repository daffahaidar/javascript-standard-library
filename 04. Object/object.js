{
  // object freeze & seal

  const person = {
    firstName: "Daffa",
    lastName: "Nabil",
  };

  Object.freeze(person); // freze object will not be able to change the value of the object
  // Object.seal(person);

  person.firstName = "Zufar";
  person.middleName = "Haidar";
  delete person.lastName; // can't delete the property because it's frozen

  console.info(person);
}

{
  // object assign

  const target = {
    firstName: "Daffa",
  };
  const source = {
    lastName: "Nabil",
  };

  Object.assign(target, source); // object assign will copy the value of the source to the target
  console.info(target);
  console.info(source);
}

{
  // Object property name & value

  const person = {
    firstName: "Daffa",
    lastName: "Nabil",
  };

  console.info(Object.values(person)); // return the value of the object
  console.info(Object.getOwnPropertyNames(person)); // return the name of the property
}
