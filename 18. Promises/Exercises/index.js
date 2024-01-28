const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

//countriesAPI using fetch and print the name of country, capital, population and area.

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((country) => {
      // console.log(
      //   `Country name: ${country.name} Capital: ${country.capital} Population: ${country.population} Area: ${country.area}`
      // );
    });
  });

// Print out all the cat names in to catNames variable.
let catsData = [];
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      catsData.push(data[i].name);
    }
    // console.log(catsData);
    // console.log(data);
  });

// Find the average weight of each cat in metric unit
let catsWeight = [];
fetch(catsAPI)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      weightsArray = data[i].weight.metric.match(/[0-9]+/g);

      averageWeight =
        weightsArray.reduce(
          (a, b) => parseInt(a) + parseInt(b)
        ) / weightsArray.length;

      // console.log(averageWeight);
    }
  });

// Read the countries api and count total number of languages in the world used as officials.
const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    const setOfLanguages = new Set();

    countries.forEach((country) => {
      country.languages.forEach((language) => {
        setOfLanguages.add(language.name);
      });
    });

    document.getElementsByTagName("body")[0].innerHTML =
      setOfLanguages.size;
  } catch (err) {
    console.error(err);
  }
};

fetchCountriesData();
