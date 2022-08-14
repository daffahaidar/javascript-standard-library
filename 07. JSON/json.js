// Json is a data format that is used to exchange data between programs.

// example object
const person = {
  firstName: "Daffa",
  middleName: "Haidar",
  lastName: "Nabil",
  address: {
    country: "Indonesia",
    city: "Majalengka",
  },
  hobbies: ["Coding", "Game", "Traveling"],
};

const json = JSON.stringify(person); // convert object to json
console.info(json);

const jsonObject = JSON.parse(json); // convert json to object
console.info(jsonObject);
