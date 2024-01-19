// Далее для вывода информации в консоль использую
// консоль VSCode и команду node
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let i = 1; i < 8; i++) {
  console.log("#".repeat(i));
}

//Generate random id
let randomId = [];
let characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

for (let i = 0; i < 10; i++) {
  randomId.push(
    characters[
      Math.floor(Math.random() * characters.length)
    ]
  );
}

console.log(randomId.join(""));

//Generate random hexadecimal number like this: #ee33df
let hexCharacters = "abcdef0123456789";
let randomHex = [];

for (let i = 0; i < 6; i++) {
  if (i === 0) {
    randomHex.push("#");
    continue;
  }
  randomHex.push(
    hexCharacters[
      Math.floor(Math.random() * hexCharacters.length)
    ]
  );
}

console.log(randomHex.join(""));

//Generate array with same structure:
/*
[
  ['Albania', 'ALB', 7]
  ...
]
*/

let countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let finalArray = [];

for (country of countries) {
  finalArray.push([
    country.charAt(0).toUpperCase() + country.slice(1),
    country.slice(0, 3).toUpperCase(),
    country.length,
  ]);
}

console.log(finalArray);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];

for (array of fullStack) {
  for (tech of array) {
    console.log(tech);
  }
}

//Copying array without mutation
let originalArray = [1, 2, 3, 4, 5];
let copyArray = originalArray.slice();
