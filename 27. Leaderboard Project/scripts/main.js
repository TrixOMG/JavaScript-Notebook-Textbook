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

function deletePlayerEntry() {
  players.splice(
    players.findIndex((p) => p.id === event.target.id),
    1,
  );
  renderPlayerEntries();
}

function plusFivePoints() {
  players.forEach((p) => {
    if (p.id === id) p.score += 5;
    return;
  });
  renderPlayerEntries();
}

function minusFivePoints() {
  players.forEach((p) => {
    if (p.id === id) p.score -= 5;
    return;
  });
  renderPlayerEntries();
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

  //Adding entry to global players variable
  players.push({
    id: generatePlayerId(),
    fristName: nameInput.value,
    lastName: lastNameInput.value,
    date: getProperDate(),
    country: countryInput.value,
    score: scoreInput.value,
  });

  renderPlayerEntries();
}

function renderPlayerEntries() {
  for (const player of players) {
    const newPlayerEntry = document.createElement("div");
    newPlayerEntry.classList.add("player-entry");
    newPlayerEntry.id = player.id;

    newPlayerEntry.innerHTML = `
  <div class="name-date-wrapper"><p>${nameInput.value}</p><p>${getProperDate()}</p></div>
  <p>${countryInput.value}</p>
  <p>${scoreInput.value}</p>
  <button onclick="deletePlayerEntry()" class="player-entry-button"><img src="./images/trash-icon.svg" alt="trash icon" /></button>
  <button onclick="plusFivePoints()" class="player-entry-button">+5</button>
  <button onclick="minusFivePoints()" class="player-entry-button">-5</button>
`;
    playerEntriesWrapper.appendChild(newPlayerEntry);
  }

}

addPlayerButton.addEventListener("click", () => {
  addPlayer();
});
