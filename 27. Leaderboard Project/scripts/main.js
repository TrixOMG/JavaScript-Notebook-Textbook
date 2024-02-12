//Get all inputs
const nameInput = document.getElementById("name-input");
const lastNameInput = document.getElementById("lastname-input");
const countryInput = document.getElementById("country-input");
const scoreInput = document.getElementById("score-input");
//Get add button
const addPlayerButton = document.getElementById("add-player");
//Get message paragraph
const message = document.getElementById("message");
//Get player entries wrapper
const playerEntriesWrapper = document.getElementById("player-entries-wrapper");

//Global players variable
const players = [];

//TODO:
//[X] Add button wrapper
//[X] Style buttons
//[X] Get trash icon
//[X] Set trash icon color to red
//[ ] Get autocomplete box to work
//[ ] Style the autocomplete box
//[ ] Style inputs
//[ ] Style player card

function generatePlayerId() {
  let randomId = [];
  let characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 10; i++) {
    randomId.push(characters[Math.floor(Math.random() * characters.length)]);
  }

  return randomId.join("");
}

function getProperDate() {
  //Feb 09, 2024 11:15
  const dateObj = new Date();

  const month = dateObj.toLocaleString("en", { month: "short" });
  const date =
    dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate();
  const year = dateObj.getFullYear();
  const hours =
    dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours();
  const minutes =
    dateObj.getMinutes() < 10
      ? "0" + dateObj.getMinutes()
      : dateObj.getMinutes();

  return `${month} ${date}, ${year} ${hours}:${minutes}`;
}

function deletePlayer(id) {
  players.splice(
    players.findIndex((p) => p.id === id),
    1,
  );

  renderPlayers();
}

function plusFiveScore(id) {
  for (const player of players) {
    if (player.id === id) {
      player.score = parseInt(player.score) + 5;
      renderPlayers();
      return;
    }
  }
}

function minusFiveScore(id) {
  for (const player of players) {
    if (player.id === id) {
      player.score = parseInt(player.score) - 5;
      renderPlayers();
      return;
    }
  }
}

function addPlayer() {
  if (
    nameInput.value === "" ||
    lastNameInput.value === "" ||
    countryInput.value === "" ||
    scoreInput.valueAsNumber === ""
  ) {
    message.innerText = "All inputs are required";
    return;
  } else if (isNaN(scoreInput.valueAsNumber)) {
    message.innerText = "Player Score value should be a whole number";
    return;
  }

  players.push({
    id: generatePlayerId(),
    name: nameInput.value,
    lastName: lastNameInput.value,
    date: getProperDate(),
    country: countryInput.value,
    score: scoreInput.value,
  });

  renderPlayers();
}

function renderPlayers() {
  playerEntriesWrapper.innerHTML = "";

  players.sort((a, b) => {
    return parseInt(b.score) - parseInt(a.score);
  });

  for (const player of players) {
    const newPlayerEntry = document.createElement("div");
    newPlayerEntry.classList.add("player-entry");
    newPlayerEntry.id = player.id;

    const nameDateWrapper = document.createElement("div");
    nameDateWrapper.classList.add("name-date-wrapper");
    nameDateWrapper.innerHTML = `<p>${player.name} ${player.lastName}</p><p class="player-card-date">${getProperDate()}</p>`;

    const countryP = document.createElement("p");
    countryP.innerText = `${player.country.toUpperCase()}`;
    countryP.classList.add("player-card-p");

    const scoreP = document.createElement("p");
    scoreP.innerText = `${player.score}`;
    scoreP.classList.add("player-card-p");

    //adding button wrapper
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("player-entry-button");
    deleteButton.innerHTML = `<img src="./images/trash-icon.svg" alt="trash icon" class="trash-icon"/>`;
    deleteButton.addEventListener("click", () => {
      deletePlayer(player.id);
    });

    const addButton = document.createElement("button");
    addButton.classList.add("player-entry-button");
    addButton.innerText = "+5";
    addButton.addEventListener("click", () => {
      plusFiveScore(player.id);
    });

    const subtractButton = document.createElement("button");
    subtractButton.classList.add("player-entry-button");
    subtractButton.innerText = "-5";
    subtractButton.addEventListener("click", () => {
      minusFiveScore(player.id);
    });

    buttonWrapper.appendChild(deleteButton);
    buttonWrapper.appendChild(addButton);
    buttonWrapper.appendChild(subtractButton);

    newPlayerEntry.appendChild(nameDateWrapper);
    newPlayerEntry.appendChild(countryP);
    newPlayerEntry.appendChild(scoreP);
    newPlayerEntry.appendChild(buttonWrapper);

    playerEntriesWrapper.appendChild(newPlayerEntry);
  }
}

addPlayerButton.addEventListener("click", () => {
  addPlayer();
  nameInput.value = "";
  lastNameInput.value = "";
  countryInput.value = "";
  scoreInput.value = "";
});
