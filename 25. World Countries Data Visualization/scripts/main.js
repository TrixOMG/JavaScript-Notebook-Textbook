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
    case "population":
      caption.innerText =
        "10 Most Populated Countries in the World";
      break;
    case "languages":
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
    resultData.push([language, filteredLanguages.length]);
  }

  resultData.sort((a, b) => {
    return b[1] - a[1];
  });

  return resultData.slice(0, 10);
}

function getTenMostPopulatedCountries(data) {
  const resultData = [];

  data.forEach((country) => {
    resultData.push([country.name, country.population]);
  });

  resultData.sort((a, b) => {
    return b[1] - a[1];
  });

  return resultData.slice(0, 10);
}

function visualizeStats(data) {
  //Clean the container
  statisticsContainer.innerHTML = "";

  const maxValue = data[0][1];

  for (member of data) {
    //Container for all data
    const fullStatsContainer =
      document.createElement("div");
    fullStatsContainer.classList.add(
      "full-stats-container"
    );

    const name = document.createElement("p");
    name.innerText = member[0];
    const count = document.createElement("p");
    count.innerText = member[1];

    // Container for "line"
    const lineOfStatsContainer =
      document.createElement("div");
    lineOfStatsContainer.classList.add(
      "line-of-stats-container"
    );
    lineOfStatsContainer.style.width = "100%";
    lineOfStatsContainer.style.height = "2em";

    // "Line"
    const lineOfStats = document.createElement("div");
    lineOfStats.classList.add("line-of-stats");
    lineOfStats.style.height = "100%";
    lineOfStats.style.width =
      (member[1] / maxValue) * 100 + "%";

    //Fitting "line" in container
    lineOfStatsContainer.appendChild(lineOfStats);

    fullStatsContainer.appendChild(name);
    fullStatsContainer.appendChild(lineOfStatsContainer);
    fullStatsContainer.appendChild(count);
    statisticsContainer.appendChild(fullStatsContainer);
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

    numOfCountriesSubtitle.innerText = `Currently we have ${countries.length} countries`;

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
