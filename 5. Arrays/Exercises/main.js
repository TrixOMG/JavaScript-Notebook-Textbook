// const countries = [
//   "Albania",
//   "Bolivia",
//   "Canada",
//   "Denmark",
//   "Ethiopia",
//   "Finland",
//   "Germany",
//   "Hungary",
//   "Ireland",
//   "Japan",
//   "Kenya",
// ];
console.log("FirstItem:", countries[0]);
console.log("LastItem:", countries[countries.length - 1]);
console.log(
  "MiddleItem:",
  countries[Math.floor(countries.length / 2)]
);

const companies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

//Filter out companies which have more than one 'o' without the filter method
let companiesWithLessThanTwoO = [];
for (let i = 0; i < companies.length; i++) {
  if (
    companies[i].indexOf("o") ===
    companies[i].lastIndexOf("o")
  ) {
    companiesWithLessThanTwoO.push(companies[i]);
  }
}
console.log(companiesWithLessThanTwoO);

//First remove all the punctuations and change the string to array and count the number of words in the array
const text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";

//First variation
let words1 = text.match(/[a-z]+/gi);
console.log("Array:", words1, "Length:", words1.length);

//Second variation
let clearText = text.replace(/[^\w\s]/gi, "");
let words2 = clearText.split(" ");
console.log("Array:", words2, "Length:", words2.length);

// Level 3 Exercise:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

let sortedAges = ages.sort();

let medianAge =
  sortedAges[Math.floor(sortedAges.length / 2)];

let sumOfAges = 0;

for (let i = 0; i < ages.length; i++) {
  sumOfAges += ages[i];
}

let averageAge = sumOfAges / ages.length;

console.log(
  "Sorted Ages:",
  sortedAges,
  "MaxAge:",
  sortedAges[sortedAges.length - 1],
  "MinAge:",
  sortedAges[0],
  "MedianAge:",
  medianAge,
  "AverageAge:",
  averageAge,
  "RangeOfAges:",
  sortedAges[sortedAges.length - 1] - sortedAges[0]
);

console.log(
  "Is (min - average) more than (max - average):",
  Math.abs(sortedAges[0] - averageAge) >
    Math.abs(sortedAges[sortedAges.length - 1] - averageAge)
);

console.log(ages.slice(0, 5));
