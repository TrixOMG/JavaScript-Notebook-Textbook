const countries = [
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "IceLand",
];
const names = ["Antonio", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

countries.forEach((country) => console.log(country));

numbers.forEach((num) => console.log(num));

const upperCountries = countries.map((c) =>
  c.toUpperCase()
);
console.log(upperCountries);

const countryesNamesLength = countries.map((c) => c.length);
console.log(countryesNamesLength);

const prodsAndPrices = products.map((p) => {
  if (typeof p.price !== "number")
    return `Product ${p.product} has a price of Not Defined.`;
  else
    return `Product ${p.product} has a price of ${p.price}.`;
});
console.log(prodsAndPrices);

const prodsWithPrices = products.filter((p) => {
  if (p.price && typeof p.price === "number") return p;
});
console.log(prodsWithPrices);

const sumOfNumbers = numbers.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(sumOfNumbers);

console.log(names.some((name) => name.length > 6));

console.log(countries.every((c) => c.includes("land")));

//Lv.2

const totalPrice = products
  .filter((p) => p.price && typeof p.price === "number")
  .reduce((sum, prod) => sum + prod.price, 0);

console.log(totalPrice);

const sumOfPrices = products.reduce((sum, p) => {
  if (p.price && typeof p.price === "number")
    return sum + p.price;
  else return sum;
}, 0);

console.log(sumOfPrices);

//Lv.3
const newCountriesData = countriesData;
const new1CountriesData = countriesData;

console.log(
  newCountriesData.sort((a, b) =>
    a.name.localeCompare(b.name)
  )
);

console.log(
  new1CountriesData.sort((a, b) =>
    a.capital.localeCompare(b.capital)
  )
);

console.log(
  countriesData.sort((a, b) => b.population - a.population)
);

// Find 10 most spoken languages

function getMostSpokenLanguages(countries, numOfLangs) {
  let countriesArray = [];

  countries.forEach((c) => {
    c.languages.forEach((l) => {
      let index = countriesArray.findIndex(
        (c) => c.language === l
      );

      if (index === -1)
        countriesArray.push({ language: l, count: 1 });
      else countriesArray[index].count++;
    });
  });

  countriesArray.sort((a, b) => {
    return b.count - a.count;
  });

  return countriesArray.slice(0, numOfLangs);
}

console.log(getMostSpokenLanguages(countriesData, 20));

// console.log({}["Engilsh"]); // undefined
// let newObj = {};
// newObj["English"] = 0;
// newObj["French"] = 0;

// console.log(newObj); // undefined
