{
  //create regex

  const regex1 = /daffa/;
  const regex2 = new RegExp("daffa");
  const regex3 = new RegExp(/daffa/);
}

{
  // test regex

  const name = "daffa haidar daffa nabil";
  const regex = /daffa/;

  const result = regex.exec(name);
  console.info(result);
  console.info(regex.exec("tidak ada"));

  const test = regex.test(name);
  console.info(test);
  console.info(regex.test("tidak ada"));
}

{
  //regex modifier

  const name = "daffa haidar\ndaffa nabil\ndagga haidar";
  const regex1 = /^d.a/gim;
  const regex2 = /haidar/gi;

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.info(result);
  }

  while ((result = regex2.exec(name)) !== null) {
    console.info(result);
  }
}

{
  // advanced regex

  const regex = /daff[ioaeu]/gi;

  const name = "daffa daffi daffa daffu daffe dagga daffa daffi";
  let result;
  while ((result = regex.exec(name)) !== null) {
    console.info(result);
  }
}

{
  const name = "dagga daffa daffi daffa daffu daffe dagga daffa daffi";

  console.info(name.match(/daff[aiueo]/gi));
  console.info(name.search(/daff[aiueo]/gi));
  console.info(name.replace(/daff[aiueo]/i, "kamu"));
  console.info(name.replaceAll(/daff[aiueo]/gi, "kamu"));
  console.info(name.split(/e/gi));
}
