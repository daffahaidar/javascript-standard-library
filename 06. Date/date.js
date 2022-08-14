{
  // create date

  const date1 = new Date(); // to create date object
  console.info(date1); // to print the date object

  const date2 = new Date(2020, 10, 10); // to create date object with specific date
  console.info(date2); // to print the date object

  const date3 = new Date(2020, 10, 10, 16, 15, 9, 123); // to create date object with specific date and time (milliseconds)
  console.info(date3); // to print the date object

  const date4 = new Date(1623167419514); // to create date object with specific date and time (Unix timestamp)
  console.info(date4); // to print the date object
}

{
  // epoch & unix timestamp
  // epoch is the number of milliseconds since January 1, 1970, 00:00:00 UTC

  const date1 = new Date();
  console.info(date1.getTime()); // will return the number of milliseconds since January 1, 1970, 00:00:00 UTC

  const date2 = new Date(2020, 10, 10); // to create date object with specific date
  console.info(date2.getTime());

  const date3 = new Date(2020, 10, 10, 16, 15, 9, 123);
  console.info(date3.getTime());

  const date4 = new Date(1623167419514);
  console.info(date4.getTime());

  console.info(Date.now());
}

{
  // date parsing

  const time = Date.parse("2020-10-10T08:45:45.123+07:00"); // to parse the date string
  console.info(time); // to print the date object

  const date = new Date(time);
  console.info(date);
}

{
  // getter dan setter
  // using getter and setter we can access and change the value of the property of the object
  const date = new Date();

  console.info(date.getFullYear()); // to get the year
  console.info(date.getMonth()); // to get the month
  console.info(date.getDate()); // to get the date
  console.info(date.getHours()); // to get the hours
  console.info(date.getMinutes()); // to get the minutes
  console.info(date.getSeconds()); // to get the seconds
  console.info(date.getMilliseconds()); // to get the milliseconds
  console.info(date.getTimezoneOffset()); // to get the timezone offset
}
