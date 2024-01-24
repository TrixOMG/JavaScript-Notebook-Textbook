const newSet = new Set();

for (let i = 0; i < 11; i++) {
  newSet.add(i);
}
console.log(newSet);

newSet.delete(1);
console.log(newSet);

newSet.clear();
console.log(newSet);

const countriesArray = [
  "Afghanistan",
  "Iraq",
  "Russia",
  "Algeria",
];

const newMap = new Map();

for (country of countriesArray) {
  newMap.set(country, country.length);
}
console.log(newMap);

// Lv.2
const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

const c = [...a, ...b];

// Union
const setC = new Set(c);
console.log(setC);

// Intersection
const setB = new Set(b);
const intersectionAB = a.filter((num) => setB.has(num));
console.log(intersectionAB);

// Difference
const diffAB = a.filter((num) => !setB.has(num));
console.log(diffAB);

//Lv.3
const countLanguages = (data) => {
  const languagesSet = new Set();

  for (let i = 0; i < data.length; i++) {
    data[i].languages.forEach((lang) => {
      languagesSet.add(lang);
    });
  }

  return languagesSet.size;
};

console.log(countLanguages(countriesData));

function getMostSpokenLanguages(countries, numOfLangs) {
  let langCount = [];
  const langSet = new Set();
  const langArray = [];

  for (let i = 0; i < countries.length; i++) {
    countries[i].languages.forEach((l) => {
      langSet.add(l);
      langArray.push(l);
    });
  }

  for (const lang of langSet) {
    const filteredLanguages = langArray.filter(
      (l) => l === lang
    );
    langCount.push({
      language: lang,
      count: filteredLanguages.length,
    });
  }

  langCount.sort((a, b) => {
    return b.count - a.count;
  });

  return langCount.slice(0, numOfLangs);
}

console.log(getMostSpokenLanguages(countriesData, 20));
