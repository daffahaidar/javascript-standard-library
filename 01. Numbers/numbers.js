const input = "12345";
const number = Number(input); // Number() converts string to number

console.info(typeof input); // will show string
console.info(typeof number); // will show number
console.info(number); // will show 12345

console.info(Number("salah")); // will show NaN because it is not a number

console.info(Number.MIN_VALUE); // will show 5e-324
console.info(Number.MAX_VALUE); // will show 1.7976931348623157e+308
console.info(Number.MIN_SAFE_INTEGER); // will show -(2^53 - 1)
console.info(Number.MAX_SAFE_INTEGER); // will show (2^53 - 1)
console.info(Number.NaN); // will show NaN

const data = Number("Daffa");
console.info(Number.isInteger(data)); // to check if data is integer
console.info(Number.isNaN(data)); // to check if data is NaN

const value = Number("12345");
console.info(value.toString(2)); // to convert number to binary
console.info(value.toLocaleString("id-ID")); // to convert number to local string in indonesia
console.info(value.toLocaleString("en-US")); // to convert number to local string in english
