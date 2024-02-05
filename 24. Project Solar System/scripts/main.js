//Get Inputs
const massInput = document.getElementById("mass");
const select = document.querySelector("select");
const submitButton = document.querySelector("button");

//Get Visuals
const planetImg = document.getElementById("planet-img");
const planetContainer = document.getElementById("planet-container");
const description = document.getElementById("description");

//Add options to select
select.append(new Option("Mercury", "Mercury"));
select.append(new Option("Venus", "Venus"));
select.append(new Option("Earth", "Earth"));
select.append(new Option("Moon", "Moon"));
select.append(new Option("Mars", "Mars"));
select.append(new Option("Jupiter", "Jupiter"));
select.append(new Option("Saturn", "Saturn"));
select.append(new Option("Uranus", "Uranus"));
select.append(new Option("Neptune", "Neptune"));
select.append(new Option("Pluto", "Pluto"));

function displayIncorrectInputMessage(message) {
  description.innerText = message;
  description.style.display = "block";
  planetContainer.style.display = "none";
}

function changePlanetImage(planet) {
  planetImg.style.width = "100%";
  planetImg.style.height = "100%";
  planetContainer.style.display = "flex";
  switch (planet) {
    case "Mercury":
      planetImg.src = "images/mercury.png";
      break;
    case "Venus":
      planetImg.src = "images/venus.png";
      break;
    case "Earth":
      planetImg.src = "images/earth.png";
      break;
    case "Moon":
      planetImg.src = "images/moon.png";
      break;
    case "Mars":
      planetImg.src = "images/mars.png";
      break;
    case "Jupiter":
      planetImg.src = "images/jupiter.png";
      break;
    case "Saturn":
      planetImg.src = "images/saturn.png";
      break;
    case "Uranus":
      planetImg.src = "images/uranus.png";
      break;
    case "Neptune":
      planetImg.src = "images/neptune.png";
      break;
    case "Pluto":
      planetImg.src = "images/pluto.png";
      break;
    default:
      console.error("Wrong planet name");
      break;
  }
}

function calculateWeight(planet, value) {
  let accelerationOfGravity = null;

  switch (planet) {
    case "Mercury":
      accelerationOfGravity = 3.7;
      break;
    case "Venus":
      accelerationOfGravity = 8.87;
      break;
    case "Earth":
      accelerationOfGravity = 9.81;
      break;
    case "Moon":
      accelerationOfGravity = 1.62;
      break;
    case "Mars":
      accelerationOfGravity = 3.71;
      break;
    case "Jupiter":
      accelerationOfGravity = 24.79;
      break;
    case "Saturn":
      accelerationOfGravity = 10.44;
      break;
    case "Uranus":
      accelerationOfGravity = 8.69;
      break;
    case "Neptune":
      accelerationOfGravity = 11.15;
      break;
    case "Pluto":
      accelerationOfGravity = 0.62;
      break;
    default:
      console.error("Wrong planet name");
      break;
  }

  const result = value * accelerationOfGravity;
  return result.toFixed(2);
}

submitButton.addEventListener("click", () => {
  const readValue = massInput.valueAsNumber;

  //Check for correct mass input
  if (massInput.valueAsNumber === "") {
    displayIncorrectInputMessage("Mass is required");
    return;
  } else if (isNaN(readValue)) {
    displayIncorrectInputMessage("Mass should be a number");
    return;
  }

  //Check for correct planet input
  if (select.value === "none") {
    displayIncorrectInputMessage("Please select a planet");
    return;
  }

  changePlanetImage(select.value);

  description.style.display = "flex";
  description.style.flexDirection = "column";
  description.style.justifyContent = "center";
  description.style.alignItems = "center";
  description.innerHTML = `Weight of the object on <span style="font-weight: 700;">${select.value}</span>`;

  const calculatedWeight = document.createElement("div");

  calculatedWeight.style.width = "8em";
  calculatedWeight.style.marginTop = "1em";
  calculatedWeight.style.height = "8em";
  calculatedWeight.style.display = "flex";
  calculatedWeight.style.flexDirection = "column";
  calculatedWeight.style.justifyContent = "center";
  calculatedWeight.style.alignItems = "center";
  calculatedWeight.style.borderRadius = "100%";
  calculatedWeight.style.backgroundColor = "rgba(54, 54, 92, 0.4)";
  calculatedWeight.innerText = calculateWeight(select.value, readValue) + " N";

  description.appendChild(calculatedWeight);
});
