const countriesAPI = "https://restcountries.com/v2/all";

const countriesContainer = document.getElementById("countries-cards-container");

for(let i = 0; i < 50; i++){
  const countryCard = document.createElement("div");
  countryCard.style.width = "5em";
  countryCard.style.height = "5em";
  countryCard.style.backgroundColor = "red";
  countriesContainer.appendChild(countryCard);
}
console.log(countriesContainer);

function updateCaption(num) {
  const numberParagraph = document.getElementById("total-num");
  numberParagraph.innerText = "Total number of countries: " + num;
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
