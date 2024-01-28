const countriesAPI = "https://restcountries.com/v2/all";
const catsAPI = "https://api.thecatapi.com/v1/breeds";

// const fetchCountiesData = fetch(countriesAPI)
//   .then((response) => response.json())
//   .then((data) => data);

// const countriesData = () => {
//   fetchCountiesData.then((a) => a);
// };

// async function fetchCountiesData() {
//   let response = await fetch(countriesAPI);
//   let data = await response.json();
//   data = JSON.stringify(data);
//   data = JSON.parse(data);
//   return data;
// }

// function main() {
//   let countriesData = fetchCountiesData();
//   return countriesData;
// }

// console.log(main());
let countriesData;

fetch(countriesAPI)
  .then((response) => response.json())
  .then((data) => {
    countriesData = data;
  })
  .then(console.log(countriesData))
  .catch((err) => console.error(err));

// console.log(countriesData);
