//const cCard = document.getElementById("c-card");
//cCard.classList.add("country-card");
//const flag = document.createElement("img");
//flag.src = cCard.flag;
//cCard.appendChild(flag);

//TODO
//[X] сверстать карточку страны
//[X] отобразить страны при помощи карточек
//  [X] найти как отображать сфетченную картинку
//    countries.forEach((c) => {
//      const countryFlag = document.createElement("img");
//      countryFlag.src = c.flag;
//      cardsContainer.appendChild(countryFlag);
//    });
//
//[X] настроить поиск по всем полям "стран" (18.02)
//[X] проверить работу поиска (18.02)
//19.02: 
//[ ] filters for search
//[ ] display stats
//[ ] work of stats button
//[ ] go back to top button
//

const countriesAPI = "https://restcountries.com/v2/all";

const cardsContainer = document.getElementById("cards-grid");

const input = document.getElementById("main-input");

const searchMessage = document.getElementById("search-message");

const fetchedCountriesData = [];
let copiedCountriesData = [];

function showSearchMessage(text) {
  if (text === "") {
    searchMessage.innerText = "";
    searchMessage.style.display = "none";
    return;
  }

  searchMessage.innerText = `${copiedCountriesData.length} countries satisfied the search criteria`;
  searchMessage.style.display = "block";
}

function drawCountriesCards() {
  cardsContainer.innerHTML = "";

  copiedCountriesData.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");

    const flag = document.createElement("img");
    flag.classList.add("flag");
    flag.src = `${country.flag}`;

    const name = document.createElement("p");
    name.classList.add("country-name");
    name.innerText = country.name;

    const infoBlock = document.createElement("section");
    infoBlock.classList.add("info-block");

    const capital = document.createElement("p");
    capital.innerText = "Capital: " + country.capital;

    const languages = document.createElement("p");
    let languagesArray = [];
    for (const lang of country.languages) {
      languagesArray.push(lang.name);
    }
    languages.innerText =
      "Languages: " + languagesArray.toString().replace(/,/g, ", ");

    const population = document.createElement("p");
    population.innerText = "Population: " + Intl.NumberFormat("en-US").format(country.population);

    infoBlock.appendChild(capital);
    infoBlock.appendChild(languages);
    infoBlock.appendChild(population);

    countryCard.appendChild(flag);
    countryCard.appendChild(name);
    countryCard.appendChild(infoBlock);

    cardsContainer.appendChild(countryCard);
  });
}

function visualizeStats(text) {
  //TODO
}

function renderAll(pText) {
  showSearchMessage(pText);
  drawCountriesCards(pText);
  visualizeStats(pText);
}

function filterCountriesBySearch(text) {
  copiedCountriesData = fetchedCountriesData;

  if (text === "") {
    renderAll(text);
    return;
  }

  //filter countries by Name, Capital or Languages
  copiedCountriesData = copiedCountriesData.filter((c) => {
    //by name or capital
    if (c.name.toLowerCase().includes(text)) return c;
    //in case there is no capital (undefined)
    if (c.capital) {
      if (c.capital.toLowerCase().includes(text)) {
        return c;
      }
    }
    //by language
    for (const lang of c.languages) {
      if (lang.name.toLowerCase().includes(text)) return c;
    }
  });
  console.log(copiedCountriesData);

  renderAll(text);
}

input.addEventListener("input", () => {
  let searchText = input.value.toLowerCase();
  filterCountriesBySearch(searchText);
});

const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    countries.forEach((c) => {
      fetchedCountriesData.push({
        flag: c.flag,
        languages: c.languages,
        capital: c.capital,
        name: c.name,
        population: c.population,
      });
    });

    //update total number of countries message
    const message = document.getElementById("number-of-countries-p");
    message.innerText = message.innerText.replace("???", countries.length);

    filterCountriesBySearch("");
  } catch (err) {
    console.error(err);
    // In case service is unavailable
    // (In learning purposes only)
    console.log("Getting Data stored locally");

    //countries_data.forEach((country) => {
    //  fetchedCountriesData.push(country.name);
    //});
  }
};

fetchCountriesData();
//
