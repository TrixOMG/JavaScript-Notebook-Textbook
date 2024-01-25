const sentence =
  "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.";

let moneyArray = sentence.match(/\d+/g);

let annualIncome =
  moneyArray[0] * 12 +
  parseInt(moneyArray[1]) +
  moneyArray[2] * 12;

console.log(annualIncome);

const positions =
  "The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction.";

const pointsArray = positions.match(/-?\d+/g);
console.log(pointsArray);

const sortedPoints = pointsArray.sort((a, b) => b - a);
console.log(sortedPoints);

biggestDistance = Math.abs(
  sortedPoints[0] - sortedPoints[sortedPoints.length - 1]
);
console.log(biggestDistance);

function mostFrequentWords(text, numberOfWords = 5) {
  const regExp = /\b\w+\b/g;
  const wordsArray = text.match(regExp);

  const wordsSet = new Set(wordsArray);
  const finalArray = [];

  for (word of wordsSet) {
    const wordsCount = wordsArray.filter(
      (w) => w === word
    ).length;

    finalArray.push({ word: word, count: wordsCount });
  }

  return finalArray
    .sort((a, b) => b.count - a.count)
    .slice(0, numberOfWords);
}

const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`;

console.log(mostFrequentWords(paragraph, 5));

function cleanText(dirtySentence) {
  const clearSentence = dirtySentence
    .match(/[a-z0-9\s,?.]/gi)
    .join("");
  console.log(mostFrequentWords(clearSentence, 5));
  return clearSentence;
}
const dirtyText = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;

console.log(cleanText(dirtyText));
