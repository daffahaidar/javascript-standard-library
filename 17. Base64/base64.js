// base 64 is used to encode and decode data

const original = "Daffa&Haidar=Nabil";
console.info(original);

const encoded = btoa(original);
console.info(encoded);

const decoded = atob(encoded);
console.info(decoded);
