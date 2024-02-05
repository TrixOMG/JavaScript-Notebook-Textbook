const numOfCountriesSubtitle = document.getElementById(
  "numOfCountries-subtitle"
);

const populationButton = document.getElementById(
  "population-button"
);

const langButton = document.getElementById(
  "languages-button"
);

const caption = document.getElementById("caption");

const statisticsContainer = document.getElementById("stat");

const countriesAPI = "https://restcountries.com/v2/all";

function updateCaption(id) {
  switch (id) {
    case "languages":
      caption.innerText =
        "10 Most Populated Countries in the World";
      break;
    case "population":
      caption.innerText =
        "10 Most Spoken Languages in the World";
      break;
    default:
      console.error("Wrong id passed to change caption");
      break;
  }
}

function getTenMostSpokenLanguages(data) {
  const setOfLanguages = new Set();
  const arrayOfLanguages = [];
  const resultData = [];

  data.forEach((country) => {
    country.languages.forEach((language) => {
      setOfLanguages.add(language.name);
      arrayOfLanguages.push(language.name);
    });
  });

  for (const language of setOfLanguages) {
    const filteredLanguages = arrayOfLanguages.filter(
      (l) => l === language
    );
    resultData.push({
      language,
      count: filteredLanguages.length,
    });
  }

  resultData.sort((a, b) => {
    return b.count - a.count;
  });

  return resultData.slice(0, 10);
}

function getTenMostPopulatedCountries(data) {
  const resultData = [];

  data.forEach((country) => {
    resultData.push({
      country: country.name,
      population: country.population,
    });
  });

  resultData.sort((a, b) => {
    return b.population - a.population;
  });

  return resultData.slice(0, 10);
}

function visualizeStats(data) {
  for (member of data) {
    const lineOfStats = document.createElement("div");
    //TODO
    // lineOfStats.innerHTML = `<p>${member.country}</p><div></div>`;
  }
}

populationButton.addEventListener("click", () => {
  fetchCountriesData("population");
});

langButton.addEventListener("click", () => {
  fetchCountriesData("languages");
});

const fetchCountriesData = async (type) => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    if (type === "languages") {
      const countriesWithLangs =
        getTenMostSpokenLanguages(countries);
      visualizeStats(countriesWithLangs);
      updateCaption(type);
    } else if (type === "population") {
      const countriesWithPopulation =
        getTenMostPopulatedCountries(countries);
      visualizeStats(countriesWithPopulation);
      updateCaption(type);
    } else {
      console.error("Wrong type passed");
      return;
    }
  } catch (err) {
    console.error(err);
    // In case service is unavailable
    // (In learning purposes only)
    console.log("Getting Data stored locally");
    if (type === "languages") {
      const countriesWithLangs =
        getTenMostSpokenLanguages(countries_data);
      visualizeStats(countriesWithLangs);
      updateCaption(type);
    } else if (type === "population") {
      const countriesWithPopulation =
        getTenMostPopulatedCountries(countries_data);
      visualizeStats(countriesWithPopulation);
      updateCaption(type);
    } else {
      console.error("Wrong type passed");
      return;
    }
  }
};

fetchCountriesData("population");
