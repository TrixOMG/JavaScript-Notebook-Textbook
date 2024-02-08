const countriesAPI = "https://restcountries.com/v2/all";
const fetchedCountriesData = [];
let copiedCountriesData = [];

let typeOfSearch = "starting-word"; // or any-word
let searchText = "";
let order = "a-z"; // or "z-a"

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

// Input
const searchInput = document.getElementById("search-input");

const message = document.getElementById("message");

function updateCaption(num) {
  const numberParagraph =
    document.getElementById("total-num");
  numberParagraph.innerText =
    "Total number of countries: " + num;
}

function filterCountriesBySearch() {
  copiedCountriesData = fetchedCountriesData;

  if (searchText === "") {
    visualizeStats();
    return;
  }

  if (typeOfSearch === "starting-word") {
    copiedCountriesData = copiedCountriesData.filter((c) =>
      c.toLowerCase().startsWith(searchText, 0)
    );
  } else if (typeOfSearch === "any-word") {
    copiedCountriesData = copiedCountriesData.filter((c) =>
      c.toLowerCase().includes(searchText)
    );
  }
  visualizeStats();
}

// only changes order
function changeFinalOrder() {
  copiedCountriesData.reverse();
  visualizeStats();
}

// only renders cards and messages
function visualizeStats() {
  if (searchText !== "") {
    if (typeOfSearch === "starting-word") {
      message.innerHTML = `Number of countries that start with <span style="color: rgb(255,0,0)">"${searchText}"</span> is: <span style="color: #bdefba">${copiedCountriesData.length}</span>`;
    } else if (typeOfSearch === "any-word") {
      message.innerHTML = `Number of countries containing <span style="color: red">"${searchText}"</span> is: <span style="color: #bdefba">${copiedCountriesData.length}</span>`;
    }
  } else {
    message.innerText = "";
  }

  countriesContainer.innerHTML = "";

  copiedCountriesData.forEach((country) => {
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");
    countryCard.innerHTML = `<p style = "z-index: 3">${country}</p>`;
    countriesContainer.appendChild(countryCard);
  });
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
  filterCountriesBySearch();
});

anyWordBtn.addEventListener("click", () => {
  toggleMainButtonsColors("any-word-button");
  typeOfSearch = "any-word";
  filterCountriesBySearch();
});

changeOrderBtn.addEventListener("click", () => {
  changeFinalOrder();
});

searchInput.addEventListener("input", () => {
  searchText = searchInput.value.toLowerCase();
  filterCountriesBySearch();
});

const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    countries.forEach((country) => {
      fetchedCountriesData.push(country.name);
    });
    filterCountriesBySearch();
    updateCaption(fetchedCountriesData.length);
  } catch (err) {
    console.error(err);
    // In case service is unavailable
    // (In learning purposes only)
    console.log("Getting Data stored locally");

    countries_data.forEach((country) => {
      fetchedCountriesData.push(country.name);
    });

    filterCountriesBySearch();

    updateCaption(fetchedCountriesData.length);
  }
};

toggleMainButtonsColors("starting-word-button");
fetchCountriesData();
