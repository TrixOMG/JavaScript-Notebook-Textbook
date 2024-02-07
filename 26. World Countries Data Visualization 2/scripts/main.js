const countriesAPI = "https://restcountries.com/v2/all";

const fetchedCountriesData = [];

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

for (let i = 0; i < 50; i++) {
  const countryCard = document.createElement("div");
  countryCard.style.width = "5em";
  countryCard.style.height = "5em";
  countryCard.style.backgroundColor = "red";
  countriesContainer.appendChild(countryCard);
}
console.log(countriesContainer);

function updateCaption(num) {
  const numberParagraph =
    document.getElementById("total-num");
  numberParagraph.innerText =
    "Total number of countries: " + num;
}

function visualizeStats(type, search, order) {
  if (search === "") {
    // Показываем все карточки
    // fetchedCountriesData
    return;
  }
  //Clean the container
  countriesContainer.innerHTML = "";
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
  // TODO
  toggleMainButtonsColors("starting-word-button");
});

anyWordBtn.addEventListener("click", () => {
  // TODO
  toggleMainButtonsColors("any-word-button");
});

changeOrderBtn.addEventListener("click", () => {
  // TODO
  // visualizeStats(,);
});

const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();

    countries.forEach((country) => {
      fetchedCountriesData.push(country.name);
    });

    updateCaption(countries.length);
  } catch (err) {
    console.error(err);
    // In case service is unavailable
    // (In learning purposes only)
    console.log("Getting Data stored locally");

    countries_data.forEach((country) => {
      fetchedCountriesData.push(country.name);
    });

    updateCaption(countries.length);
  }
};

toggleMainButtonsColors("starting-word-button");
visualizeStats("starting-word", "", "a-z");
fetchCountriesData();
