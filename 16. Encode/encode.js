// encode is used to encode a string to base64
// decode is used to decode a base64 string to a string

{
  // encode uri dan decode uri

  const url = "http://contoh.com/?name=Daffa Haidar Nabil";
  console.info(url);

  const encoded = encodeURI(url);
  console.info(encoded);

  const decoded = decodeURI(encoded);
  console.info(decoded);
}

{
  // encode uri dan decode uri

  const value = "Daffa&Haidar=Nabil";
  const url = "http://contoh.com/?name=";
  console.info(url + value);

  const encoded = encodeURIComponent(value);
  console.info(url + encoded);

  const decoded = decodeURIComponent(encoded);
  console.info(url + decoded);
}
