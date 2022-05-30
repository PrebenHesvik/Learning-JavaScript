let book1 = {
  title: "A New Earth",
  author: "Eckhart Tolle",
  pageCount: 350,
};

let book2 = {
  title: "Economics in one lesson",
  author: "Henry Hazlitt",
  pageCount: 215,
};

let getSummary = function (book) {
  let str = `${book.title} by ${book.author}`;
  console.log(str);
};

getSummary(book1);
getSummary(book2);

let getSummary2 = function (book) {
  return {
    summary: `${book.title} by ${book.author}`,
    pageCountSummary: `${book.title} is ${book.pageCount} pages long`,
  };
};

let bookSummary = getSummary2(book1);
console.log(bookSummary.pageCountSummary);

//////////  CONVERTING TEMPERATURES  //////////
function converter(degrees) {
  let celsius = (temp = (degrees - 32) * (5 / 9));
  let kalvin = (degrees + 459.67) * (5 / 9);

  temp_object = {
    Farenheit: degrees,
    Celsius: celsius,
    Kelvin: kalvin,
  };
  return temp_object;
}

let fahrenheit = 32;

let degrees = converter(100);
console.log(degrees.Farenheit);
console.log(degrees.Celsius);
console.log(degrees.Kelvin);
