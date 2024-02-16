//TODO:
//HTML:
//[X] add arrow icons to sort buttons
//CSS:
//
//JS:
//
//
//

//const cCard = document.getElementById("c-card");
//cCard.classList.add("country-card");
//const flag = document.createElement("img");
//flag.src = cCard.flag;
//cCard.appendChild(flag);

const countriesAPI = "https://restcountries.com/v2/all";

const fetchCountriesData = async () => {
  try {
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    console.log(countries);
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

//fetchCountriesData();
//
