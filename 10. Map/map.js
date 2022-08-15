// map is a object that contains all the information about the map

const map = new Map(); // create a new map
map.set("Name", "Daffa Haidar Nabil Zufar"); // set the key and value
map.set("Address", "Indonesia"); // set the key and value

console.info(map); // print the map (will return the map object)
console.info(map.get("Name")); // print the value of the key "Name"
console.info(map.get("Address")); // print the value of the key "Address"
console.info(map.get("Hobby")); // print the value of the key "Hobby" (will return undefined because the key is not exist)

//   print using for of loop
for (const element of map) {
  console.info(`${element[0]} : ${element[1]}`);
}

// print using forEach loop
map.forEach((value, key) => console.info(`${key} : ${value}`));
