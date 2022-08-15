const set = new Set(); // create a new set

set.add("Daffa");
set.add("Daffa"); // set will ignore the duplicate value
set.add("Haidar");
set.add("Nabil");

console.info(set);

set.forEach((value) => console.info(value));
