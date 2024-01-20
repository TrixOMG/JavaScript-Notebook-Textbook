function reverseArray(array) {
  var reversedArray = [];

  for (let i = array.length - 1; i >= 0; i--) {
    reversedArray.push(array[i]);
  }

  return reversedArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));

function evensAndOdds(num) {
  let countEvens = 0;
  let countOdds = 0;

  for (let i = 0; i <= num; i++) {
    if (i % 2 === 0) {
      countEvens++;
    } else {
      countOdds++;
    }
  }

  return `The number of odds are ${countOdds}.\nThe number of evens are ${countEvens}.`;
}

console.log(evensAndOdds(100));

function generageRandomHex() {
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

  return randomHex.join("");
}

function convertHexaToRgb(hex) {
  let copyHex = hex.slice(1);

  let red = parseInt(copyHex.slice(0, 2), 16);
  let green = parseInt(copyHex.slice(2, 4), 16);
  let blue = parseInt(copyHex.slice(4, 6), 16);

  return `rgb(${red}, ${green}, ${blue})`;
}

console.log(convertHexaToRgb(generageRandomHex()));

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
    else return true;
  }
}

console.log(isPrime(11));
