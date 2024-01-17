let fullName = "Pavel Nikitin";

console.log(fullName.substring(0, 6)); // Starting index, Ending index

console.log(fullName.substr(0, 5)); // Starting index, number of chars

console.log(fullName.split(" "));

console.log(fullName.replace("Pavel", "John"));

console.log(fullName.charAt(8));

console.log(fullName.lastIndexOf("i"));

console.log(fullName.match("i"));

console.log(fullName.repeat(10));

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(typeof parseInt("10"));

console.log(Math.round(9.6));

let search = "on";
console.log("python".includes(search)) && "jargon".includes(search);

console.log(Math.floor(Math.random() * 101));

console.log(50 + Math.floor(Math.random() * 51));

console.log(Math.floor(Math.random() * 256));

console.log("1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");

let sentence =
  "You cannot end a sentence with because because because is a conjunction";
console.log(
  sentence.substr(
    sentence.indexOf("b"),
    sentence.lastIndexOf("e") - sentence.indexOf("b") + 1
  )
); //because because because

let loveSentence =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
// counting 'love' in this sentence:
console.log(loveSentence.match(/love/gi).length);

console.log(sentence.match(/because/gi).length);

// Cleaning text and finding most frequent word:
const dirtySentence =
  "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching.";

//cleaning (sentence with valid punctuation)
clearSentence = dirtySentence.match(/[a-z0-9\s,?.]/gi).join("");

console.log(clearSentence);
//most frequent word

let wordsArray = clearSentence
  .match(/[a-z0-9\s]/gi)
  .join("")
  .split(" ");

let mostFrequentWordCount = 0;
let mostFrequentWord = "";

for (let i = 0; i < wordsArray.length; i++) {
  let currentWordCount = 0;
  for (let j = 0; j < wordsArray.length; j++) {
    if (wordsArray[i] === wordsArray[j]) {
      currentWordCount++;
    }
  }
  if (currentWordCount > mostFrequentWordCount) {
    mostFrequentWordCount = currentWordCount;
    mostFrequentWord = wordsArray[i];
  }
}

console.log(
  "Most Frequent Word:",
  mostFrequentWord,
  "Count:",
  mostFrequentWordCount
);

let incomeSentence =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";
let extractedNumbers = incomeSentence.match(/[0-9]+/g);

let sum =
  extractedNumbers[0] * 12 + extractedNumbers[2] * 12 + +extractedNumbers[1];

console.log("Annual Income = " + sum + " euro");
