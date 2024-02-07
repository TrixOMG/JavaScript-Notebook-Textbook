const countriesAPI = "https://restcountries.com/v2/all";
const fetchedCountriesData = [];

let typeOfSearch = "starting-word";
let searchText = "";
let order = "a-z";

const countriesContainer = document.getElementById(
  "countries-cards-container"
);

//Buttons
const startingWordBtn = document.getElementById(
  "starting-word-button"
);
const anyWordBtn = document.getElementById(
  "any-word-button"
);
const changeOrderBtn = document.getElementById(
  "change-order-button"
);
const searchButton =
  document.getElementById("search-button");

function updateCaption(num) {
  const numberParagraph =
    document.getElementById("total-num");
  numberParagraph.innerText =
    "Total number of countries: " + num;
}

function visualizeStats() {
  // Clean the container
  countriesContainer.innerHTML = "";

  const fetchedCountriesDataCopy = fetchedCountriesData;

  // TODO: A LOT
  switch (order) {
    case "a-z":
      // if there is no search
      if (
        searchText === "" &&
        typeOfSearch === "starting-word"
      ) {
        fetchedCountriesDataCopy.forEach((country) => {
          const countryCard = document.createElement("div");
          countryCard.classList.add("country-card");
          countryCard.innerHTML = `<p style = "z-index: 3">${country}</p>`;
          countriesContainer.appendChild(countryCard);
        });
      } else {
        fetchedCountriesDataCopy
          .filter((c) =>
            c.toLowerCase().startsWith(searchText, 0)
          )
          .forEach((country) => {
            const countryCard =
              document.createElement("div");
            countryCard.classList.add("country-card");
            countryCard.innerHTML = `<p style = "z-index: 3">${country}</p>`;
            countriesContainer.appendChild(countryCard);
          });
      }
      break;

    case "z-a":
      // if there is no search
      if (
        searchText === "" &&
        typeOfSearch === "starting-word"
      ) {
        fetchedCountriesDataCopy
          .reverse()
          .forEach((country) => {
            const countryCard =
              document.createElement("div");
            countryCard.classList.add("country-card");
            countryCard.innerHTML = `<p style = "z-index: 3">${country}</p>`;
            countriesContainer.appendChild(countryCard);
          });
      } else if (
        searchText === "" &&
        typeOfSearch === "any-word"
      ) {
      }
      break;

    default:
      console.error("Wrong order passed to visualizeStats");
  }
}

function toggleMainButtonsColors(btn) {
  const nonActiveColor = "#895be6";
  const activeColor = "#6b43bb";

  switch (btn) {
    case "starting-word-button":
      startingWordBtn.style.backgroundColor = activeColor;
      anyWordBtn.style.backgroundColor = nonActiveColor;
      break;
    case "any-word-button":
      startingWordBtn.style.backgroundColor =
        nonActiveColor;
      anyWordBtn.style.backgroundColor = activeColor;
      break;
    default:
      console.error(
        "Wrong button id passed to toggleMainButtonsColors"
      );
      break;
  }
}

startingWordBtn.addEventListener("click", () => {
  toggleMainButtonsColors("starting-word-button");
  typeOfSearch = "starting-word";
});

anyWordBtn.addEventListener("click", () => {
  toggleMainButtonsColors("any-word-button");
  typeOfSearch = "any-word";
});

changeOrderBtn.addEventListener("click", () => {
  if (order === "a-z") {
    order = "z-a";
  } else {
    order = "a-z";
  }
  visualizeStats();
});

searchButton.addEventListener("click", () => {
  searchText = document
    .getElementById("search-input")
    .value.toLowerCase();
  visualizeStats();
});

const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    countries.forEach((country) => {
      fetchedCountriesData.push(country.name);
    });

    visualizeStats();

    updateCaption(countries.length);
  } catch (err) {
    console.error(err);
    // In case service is unavailable
    // (In learning purposes only)
    console.log("Getting Data stored locally");

    countries_data.forEach((country) => {
      fetchedCountriesData.push(country.name);
    });

    visualizeStats();

    updateCaption(countries.length);
  }
};

toggleMainButtonsColors("starting-word-button");
fetchCountriesData();
