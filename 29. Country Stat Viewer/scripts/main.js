//const cCard = document.getElementById("c-card");
//cCard.classList.add("country-card");
//const flag = document.createElement("img");
//flag.src = cCard.flag;
//cCard.appendChild(flag);

//TODO
//[ ] сверстать карточку страны
//[ ] отобразить страны при помощи карточек
//  [X] найти как отображать сфетченную картинку
//    countries.forEach((c) => {
//      const countryFlag = document.createElement("img");
//      countryFlag.src = c.flag;
//      cardsContainer.appendChild(countryFlag);
//    });
//[ ] настроить поиск по всем полям "стран"

const countriesAPI = "https://restcountries.com/v2/all";

const cardsContainer = document.getElementById("cards-grid");

const fetchedCountriesData = [];
let copiedCountriesData = [];

function filterCountriesBySearch(text) {
  copiedCountriesData = fetchedCountriesData;

  if (text === "") {
    showSearchMessage(text);
    drawCountriesCards(text);
    visualizeStats(text);
    return;
  }

  copiedCountriesData = copiedCountriesData.filter((c) => {
    //TODO
    c.toLowerCase().includes(text)
  });

  visualizeStats(text);
}

searchInput.addEventListener("input", () => {
  let searchText = searchInput.value.toLowerCase();
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
        populaiton: c.population,
      });
    });

    filterCountriesBySearch();
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
