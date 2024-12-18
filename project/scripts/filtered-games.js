const games = [
  {
    gameName: "Flamecraft",
    approxPlayTime: "60-75 min",
    lengthOfGame: "long",
    numPlayers: "1-5",
    playsBest: 3,
    imageUrl: "./images/games/flamecraft.jpg",
  },
  {
    gameName: "Forbidden Island",
    approxPlayTime: "30 min",
    lengthOfGame: "short",
    numPlayers: "2-4",
    playsBest: 4,
    imageUrl: "./images/games/forbbidenisland.jpg",
  },
  {
    gameName: "Great Western Trail",
    approxPlayTime: "75-150 min",
    lengthOfGame: "long",
    numPlayers: "1-4",
    playsBest: 3,
    imageUrl: "./images/games/gwesterntrail.jpg",
  },
  {
    gameName: "Heat",
    approxPlayTime: "30-60 min",
    lengthOfGame: "short",
    numPlayers: "1-6",
    playsBest: 5,
    imageUrl: "./images/games/heat.jpg",
  },
  {
    gameName: "Marvel Munchkin",
    approxPlayTime: "60-120 min",
    lengthOfGame: "long",
    numPlayers: "3-6",
    playsBest: 4,
    imageUrl: "./images/games/marvelmunchkin.jpg",
  },
  {
    gameName: "Scout",
    approxPlayTime: "15 min",
    lengthOfGame: "short",
    numPlayers: "2-5",
    playsBest: 4,
    imageUrl: "./images/games/scout.jpg",
  },
  {
    gameName: "Sea Salt and Paper",
    approxPlayTime: "30-40 min",
    lengthOfGame: "short",
    numPlayers: "2-4",
    playsBest: 2,
    imageUrl: "./images/games/sea_salt.jpg",
  },
  {
    gameName: "Search for Planet X",
    approxPlayTime: "60-75 min",
    lengthOfGame: "long",
    numPlayers: "1-4",
    playsBest: 3,
    imageUrl: "./images/games/planetx.jpg",
  },
  {
    gameName: "Survive",
    approxPlayTime: "45-60 min",
    lengthOfGame: "short",
    numPlayers: "2-4",
    playsBest: 4,
    imageUrl: "./images/games/survive.jpg",
  },
  {
    gameName: "The Loop",
    approxPlayTime: "60 min",
    lengthOfGame: "long",
    numPlayers: "1-4",
    playsBest: 2,
    imageUrl: "./images/games/theloop.jpg",
  },
];

function displayGames(filteredGames) {
  const gameContainer = document.querySelector(".games-grid");
  gameContainer.innerHTML = ""; // Clear existing content

  filteredGames.forEach((game) => {
    let card = document.createElement("section");
    let name = document.createElement("h3");
    name.innerText = game.gameName;

    let approxPlayTime = document.createElement("div");
    approxPlayTime.innerHTML = `<label>Approx Play Time:</label> ${game.approxPlayTime}`;

    let numPlayers = document.createElement("div");
    numPlayers.innerHTML = `<label>Number of Players:</label> ${game.numPlayers}`;

    let playsBest = document.createElement("div");
    playsBest.innerHTML = `<label>Plays Best:</label> ${game.playsBest}`;

    let image = document.createElement("img");
    image.setAttribute("src", game.imageUrl);
    image.setAttribute("loading", "lazy");
    image.setAttribute("class", "game-photo ");

    card.appendChild(name);
    card.appendChild(approxPlayTime);
    card.appendChild(numPlayers);
    card.appendChild(playsBest);
    card.appendChild(image);

    document.querySelector(".games-grid").appendChild(card);
  });
}

displayGames(games);

document.querySelector("#long").addEventListener("click", function (event) {
  event.preventDefault();
  const long = games.filter((game) => game.lengthOfGame == "long");
  displayGames(long);
});

document.querySelector("#short").addEventListener("click", function (event) {
  event.preventDefault();
  const short = games.filter((game) => game.lengthOfGame == "short");
  displayGames(short);
});

document
  .querySelector("#twoplayer")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const twoplayerGames = games.filter((game) => game.playsBest == 2);
    displayGames(twoplayerGames);
  });

document.querySelector("#fourmore").addEventListener("click", function (event) {
  event.preventDefault();
  const fourmoreGames = games.filter((game) => game.playsBest >= 4);
  displayGames(fourmoreGames);
});

document.querySelector("#showall").addEventListener("click", function (event) {
  event.preventDefault();
  displayGames(games);
});
