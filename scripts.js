// DOM Elements
const titleScreen = document.getElementById("title-screen");
const scene = document.getElementById("scene");
const helloKitty = document.getElementById("hello-kitty");
const cinnamoroll = document.getElementById("cinnamoroll");
// Character <img> elements for swapping images per conversation step
const helloKittyImg = helloKitty.querySelector("img");
const cinnamorollImg = cinnamoroll.querySelector("img");
const kittySpeech = document.getElementById("kitty-speech");
const cinnamorollSpeech = document.getElementById("cinnamoroll-speech");
const polaroidSlider = document.getElementById("polaroid-slider");
const navButtons = document.querySelector(".nav-buttons");
const polaroidImages = document.querySelectorAll(".polaroid");

let currentIndex = 0; // Track the current conversation index
let polaroidIndex = 0; // Track the current Polaroid to display
const clickHereButton = document.getElementById("click-here-btn"); // Reference the existing button
let feelingsButton; // Declare the "Click Here" button for feelings text
let promptDisplayed = false; // Flag to ensure the prompt is shown only once

// Conversations
const conversations = [
  {
    kitty: " ",
    cinnamoroll: "MEOWWWW MEOWW BABBYYY",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-hello.PNG",
  },

  {
    kitty: "kya he be gende",
    cinnamoroll: "gendiii where are ?? ",
    kittyImg: "woodstock-angry.PNG",
    cinnamorollImg: "snoopy-hello.PNG",
  },
  {
    kitty: "kuch nahi",
    cinnamoroll: " ",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-hello.PNG",
  },
  {
    kitty: " ",
    cinnamoroll: "ole baba. maru puchku, su thayu?",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },

  {
    kitty: "tumko kya hai hume kuch bhi ho",
    cinnamoroll: " ",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },

  {
    kitty: " ",
    cinnamoroll: "maru gendi bataoge bhi ka huyi",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },

  {
    kitty: "hum jaa rhe hai. humko koi pyaar nahi karta",
    cinnamoroll: " ",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },

  {
    kitty: "ye dekho rok bhi nahi raha humko",
    cinnamoroll: " ",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-hello.PNG",
  },

  {
    kitty: "UTHALO UTHALO",
    cinnamoroll: " ",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },

  {
    kitty: " ",
    cinnamoroll: "are dobiii. tum ruko hum aate hai",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },

  {
    kitty:
      "tumko jidhar jana hai jao idhar matt aao. hum bhi jaa rahe hai. GOODBYEE",
    cinnamoroll: " ",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-normal.PNG",
  },
  {
    kitty: "wrong chat bro",
    cinnamoroll: "ARE RUKO BE. EE DEKHO HUM AAPKE LIYE KYA LAYE HAI?",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-lily.PNG",
  },

  {
    kitty: "lekin tum ab humare favorite nahi rahe",
    cinnamoroll: "darling it's lily. your favorite",
    kittyImg: "woodstock-angry.PNG",
    cinnamorollImg: "snoopy-lily.PNG",
  },

  {
    kitty: " ",
    cinnamoroll: "hm theek ba",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-lily.PNG",
  },

  {
    kitty: "HUME KYU AUR BHI HAI. UNKO KHILAO JAKE POPCORN",
    cinnamoroll: "toh phir kya popcorn khaogi?",
    kittyImg: "woodstock-angry.PNG",
    cinnamorollImg: "snoopy-popcorn.PNG",
  },

  {
    kitty: "hum kha lenge mann hoga tabhi. tumhare sath kuch nahi karna hume",
    cinnamoroll: "ab ice cream to khalo. orangeeee laye hai😋😋",
    kittyImg: "woodstock-angry.PNG",
    cinnamorollImg: "snoopy-orange.PNG",
  },

  {
    kitty: "haa jayungi lekin tumhare sath nahi",
    cinnamoroll: "suno na. ye dekho. udaipur chalogi?",
    kittyImg: "woodstock-angry.PNG",
    cinnamorollImg: "snoopy-udaipur.PNG",
  },

  {
    kitty:
      "jao jao kisne roka hai. tumko kabhi roke hi nahi hum. jo karna hai kar sakte ho",
    cinnamoroll: "thik hai phir hum to chale akele. byee",
    kittyImg: "woodstock-angry.PNG",
    cinnamorollImg: "snoopy-bye.PNG",
  },

  {
    kitty: "awwww.. lekin hum ab bhi tumpe gussa hai",
    cinnamoroll: "aagaye wapis. humri bangalan ke liye bangles laye hai😚😚",
    kittyImg: "woodstock-happy.PNG",
    cinnamorollImg: "snoopy-bangles.PNG",
  },
  {
    kitty: "mei nahi aa rhi tum hi jake aao",
    cinnamoroll: "are yaar.. chalo tumko beach pe leke jate hai. GOAAA",
    kittyImg: "woodstock-happy.PNG",
    cinnamorollImg: "snoopy-goa.PNG",
  },
  {
    kitty: "just say you hate me",
    cinnamoroll: "OKIEE DOKIEE DARLING.. BOII BOII",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-bye.PNG",
  },
  {
    kitty: " ",
    cinnamoroll: "SHH!! CHUP KARO. I GOT YOU SOMETHING😋",
    kittyImg: "woodstock-sad.PNG",
    cinnamorollImg: "snoopy-sunglasses.PNG",
  },
  {
    kitty: "AWWW.. GENDEEE HUM TUMKO PREGNANT KAR DENGE. COME OVERRR",
    cinnamoroll: " ",
    kittyImg: "woodstock-love.PNG",
    cinnamorollImg: "snoopy-sunglasses.PNG",
  },
  {
    kitty: "MWAH MWAH MWAH",
    cinnamoroll: "ehehehe MARU PUCHKUUU🥰🥰",
    kittyImg: "woodstock-love.PNG",
    cinnamorollImg: "snoopy-love.PNG",
  },
];

// Start Title Screen
document.getElementById("start-btn").addEventListener("click", () => {
  titleScreen.style.display = "none";
  scene.style.display = "flex";
  // Change background to background.PNG
  document.body.style.backgroundImage =
    "url('background.png')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  animateCharacters();
  showConversation(0);
});

// Animate Characters
function animateCharacters() {
  gsap.from(cinnamoroll, { x: "-100%", duration: 1 });
  gsap.from(helloKitty, { x: "100%", duration: 1 });
}

// Show Conversation
function showConversation(index) {
  if (index >= conversations.length) return; // Prevent overflow

  currentIndex = index;
  const convo = conversations[index];
  kittySpeech.textContent = convo.kitty || "";
  cinnamorollSpeech.textContent = convo.cinnamoroll || "";

  // If conversation step specifies images, update character images
  if (convo.kittyImg && helloKittyImg) {
    helloKittyImg.src = convo.kittyImg;
  }
  if (convo.cinnamorollImg && cinnamorollImg) {
    cinnamorollImg.src = convo.cinnamorollImg;
  }

  gsap.to(kittySpeech, { display: "block", opacity: 1, duration: 0.5 });
  gsap.to(cinnamorollSpeech, {
    display: "block",
    opacity: 1,
    duration: 0.5,
    delay: 0.5,
  });

  handleSurprise(convo);
}

// Handle "Click Here" button visibility and event
function handleSurprise(conversation) {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (conversation.cinnamoroll === "ehehehe MARU PUCHKUUU🥰🥰") {
    // Hide prev/next buttons and show center button
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
    clickHereButton.style.display = "block";
    navButtons.classList.add("center-only"); // Center the container
  } else {
    // Show prev/next buttons and hide center button
    prevBtn.style.display = "block";
    nextBtn.style.display = "block";
    clickHereButton.style.display = "none";
    navButtons.classList.remove("center-only"); // Back to space-between
  }
}

// Add event listener to the click here button (only once)
clickHereButton.addEventListener("click", () => {
  clickHereButton.style.display = "none"; // Hide the button
  showTicTacToeGame(); // Show the Tic-Tac-Toe game
  //add a audio which plays when game starts
  const audio = new Audio("anupama-fav-song.mp3");
  audio.play();
});

// Tic-Tac-Toe Game Variables
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let playerSymbol = "";
let computerSymbol = "";
let playerColor = "#f56060"; // Pink
let computerColor = "#8fafff"; // Blue
let currentPlayer = "player";
let gameActive = true;

// Show Tic-Tac-Toe Game and hide characters and buttons
function showTicTacToeGame() {
  // Hide unnecessary elements
  helloKitty.style.display = "none";
  cinnamoroll.style.display = "none";
  navButtons.style.display = "none";
  kittySpeech.style.display = "none";
  cinnamorollSpeech.style.display = "none";

  // Show symbol selection screen
  showSymbolSelection();
}

// Show X/O selection screen
function showSymbolSelection() {
  const selectionScreen = document.createElement("div");
  selectionScreen.id = "symbol-selection";
  selectionScreen.style.position = "fixed";
  selectionScreen.style.top = "0";
  selectionScreen.style.left = "0";
  selectionScreen.style.width = "100%";
  selectionScreen.style.height = "100%";
  selectionScreen.style.backgroundColor = "#ffe4cc"; // Light orange background
  selectionScreen.style.display = "flex";
  selectionScreen.style.flexDirection = "column";
  selectionScreen.style.justifyContent = "center";
  selectionScreen.style.alignItems = "center";
  selectionScreen.style.zIndex = "1000";

  const title = document.createElement("h2");
  title.textContent = "Choose Your Symbol";
  title.style.color = "#d2691e";
  title.style.fontSize = "2rem";
  title.style.marginBottom = "30px";
  title.style.fontFamily = '"Delius Unicase", sans-serif';

  const buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.gap = "30px";

  const xButton = createSymbolButton("X");
  const oButton = createSymbolButton("O");

  buttonContainer.appendChild(xButton);
  buttonContainer.appendChild(oButton);
  selectionScreen.appendChild(title);
  selectionScreen.appendChild(buttonContainer);

  document.body.appendChild(selectionScreen);
}

// Create symbol selection button
function createSymbolButton(symbol) {
  const button = document.createElement("button");
  button.textContent = symbol;
  button.style.fontSize = "3rem";
  button.style.width = "100px";
  button.style.height = "100px";
  button.style.backgroundColor = "#fff";
  button.style.border = "3px solid #ff8c42";
  button.style.borderRadius = "15px";
  button.style.color = "#d2691e";
  button.style.cursor = "pointer";
  button.style.fontWeight = "bold";
  button.style.fontFamily = '"Delius Unicase", sans-serif';
  button.style.transition = "all 0.3s";

  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#ff8c42";
    button.style.color = "white";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#fff";
    button.style.color = "#d2691e";
  });

  button.addEventListener("click", () => {
    playerSymbol = symbol;
    computerSymbol = symbol === "X" ? "O" : "X";
    document.getElementById("symbol-selection").remove();
    createGameBoard();
  });

  return button;
}

// Create the game board
function createGameBoard() {
  const gameContainer = document.createElement("div");
  gameContainer.id = "tic-tac-toe-game";
  gameContainer.style.position = "fixed";
  gameContainer.style.top = "0";
  gameContainer.style.left = "0";
  gameContainer.style.width = "100%";
  gameContainer.style.height = "100%";
  gameContainer.style.backgroundColor = "#ffe4cc"; // Light orange background
  gameContainer.style.display = "flex";
  gameContainer.style.flexDirection = "column";
  gameContainer.style.justifyContent = "center";
  gameContainer.style.alignItems = "center";
  gameContainer.style.zIndex = "1000";

  const title = document.createElement("h2");
  title.textContent = `Puchku is ${playerSymbol} - Madhubala is ${computerSymbol}`;
  title.style.color = "#d2691e";
  title.style.fontSize = "1.5rem";
  title.style.marginBottom = "20px";
  title.style.fontFamily = '"Delius Unicase", sans-serif';

  const board = document.createElement("div");
  board.id = "game-board";
  board.style.display = "grid";
  board.style.gridTemplateColumns = "repeat(3, 100px)";
  board.style.gridTemplateRows = "repeat(3, 100px)";
  board.style.gap = "5px";
  board.style.backgroundColor = "#ffb366"; // Light orange for grid lines
  board.style.padding = "5px";
  board.style.borderRadius = "10px";

  // Create 9 cells
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("game-cell");
    cell.dataset.index = i;
    cell.style.backgroundColor = "#ffe4cc";
    cell.style.display = "flex";
    cell.style.justifyContent = "center";
    cell.style.alignItems = "center";
    cell.style.fontSize = "2.5rem";
    cell.style.fontWeight = "bold";
    cell.style.fontFamily = '"Delius Unicase", sans-serif';
    cell.style.cursor = "pointer";
    cell.style.borderRadius = "5px";
    cell.style.transition = "background-color 0.3s";

    cell.addEventListener("mouseover", () => {
      if (gameBoard[i] === "" && gameActive && currentPlayer === "player") {
        cell.style.backgroundColor = "#ffd4a3";
      }
    });

    cell.addEventListener("mouseout", () => {
      if (gameBoard[i] === "") {
        cell.style.backgroundColor = "#ffe4cc";
      }
    });

    cell.addEventListener("click", () => makeMove(i));
    board.appendChild(cell);
  }

  const statusDiv = document.createElement("div");
  statusDiv.id = "game-status";
  statusDiv.textContent = "Puchku's turn!";
  statusDiv.style.color = "#d2691e";
  statusDiv.style.fontSize = "1.2rem";
  statusDiv.style.marginTop = "20px";
  statusDiv.style.fontFamily = '"Delius Unicase", sans-serif';

  gameContainer.appendChild(title);
  gameContainer.appendChild(board);
  gameContainer.appendChild(statusDiv);
  document.body.appendChild(gameContainer);
}

// Handle player move
function makeMove(index) {
  if (gameBoard[index] !== "" || !gameActive || currentPlayer !== "player") {
    return;
  }

  gameBoard[index] = playerSymbol;
  const cell = document.querySelector(`[data-index="${index}"]`);
  cell.textContent = playerSymbol;
  cell.style.color = playerColor;
  cell.style.cursor = "default";

  if (checkWinner()) {
    endGame(checkWinner());
    return;
  }

  if (gameBoard.every((cell) => cell !== "")) {
    endGame("draw");
    return;
  }

  currentPlayer = "computer";
  document.getElementById("game-status").textContent = "Madhubala's turn";

  setTimeout(computerMove, 500);
}

// Computer makes a move
function computerMove() {
  if (!gameActive) return;

  const availableMoves = gameBoard
    .map((cell, index) => (cell === "" ? index : null))
    .filter((val) => val !== null);

  // Simple AI: Try to win, then try to block, then random
  let move =
    findBestMove(computerSymbol) ||
    findBestMove(playerSymbol) ||
    availableMoves[Math.floor(Math.random() * availableMoves.length)];

  gameBoard[move] = computerSymbol;
  const cell = document.querySelector(`[data-index="${move}"]`);
  cell.textContent = computerSymbol;
  cell.style.color = computerColor;
  cell.style.cursor = "default";

  if (checkWinner()) {
    endGame(checkWinner());
    return;
  }

  if (gameBoard.every((cell) => cell !== "")) {
    endGame("draw");
    return;
  }

  currentPlayer = "player";
  document.getElementById("game-status").textContent = "Puchku's turn!";
}

// Find best move for AI
function findBestMove(symbol) {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] === symbol &&
      gameBoard[b] === symbol &&
      gameBoard[c] === ""
    )
      return c;
    if (
      gameBoard[a] === symbol &&
      gameBoard[c] === symbol &&
      gameBoard[b] === ""
    )
      return b;
    if (
      gameBoard[b] === symbol &&
      gameBoard[c] === symbol &&
      gameBoard[a] === ""
    )
      return a;
  }
  return null;
}

// Check for winner
function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return gameBoard[a];
    }
  }
  return null;
}

// End game
function endGame(result) {
  gameActive = false;
  const statusDiv = document.getElementById("game-status");

  if (result === "draw") {
    statusDiv.textContent = "AWW ITS A DRAWW";
  } else if (result === playerSymbol) {
    statusDiv.textContent =
      "eheheh maru puchkuu  wins!! sho proud of you gendiii";
  } else {
    statusDiv.textContent = "madhubala wins!! SORRY BABYY😔";
  }

  // Add play again button
  setTimeout(() => {
    const playAgainBtn = document.createElement("button");
    playAgainBtn.textContent = "Play Again";
    playAgainBtn.style.marginTop = "20px";
    playAgainBtn.style.padding = "10px 20px";
    playAgainBtn.style.fontSize = "1rem";
    playAgainBtn.style.backgroundColor = "#ff8c42";
    playAgainBtn.style.color = "white";
    playAgainBtn.style.border = "none";
    playAgainBtn.style.borderRadius = "5px";
    playAgainBtn.style.cursor = "pointer";
    playAgainBtn.style.fontFamily = '"Delius Unicase", sans-serif';

    playAgainBtn.addEventListener("click", () => {
      document.getElementById("tic-tac-toe-game").remove();
      resetGame();
      showSymbolSelection();
    });

    document.getElementById("tic-tac-toe-game").appendChild(playAgainBtn);
  }, 1000);
}

// Reset game
function resetGame() {
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  playerSymbol = "";
  computerSymbol = "";
  currentPlayer = "player";
  gameActive = true;
}

// Helper function to create buttons
function createButton(text, onClick) {
  const button = document.createElement("button");
  button.textContent = text;
  button.style.padding = "10px 20px";
  button.style.fontSize = "1rem";
  button.style.backgroundColor = "#ff4980";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "5px";
  button.style.cursor = "pointer";
  button.style.marginTop = "20px";
  button.addEventListener("click", onClick);
  return button;
}

// Navigation Buttons
document.getElementById("prev-btn").addEventListener("click", () => {
  if (currentIndex > 0) showConversation(currentIndex - 1);
});

document.getElementById("next-btn").addEventListener("click", () => {
  if (currentIndex < conversations.length - 1)
    showConversation(currentIndex + 1);
});

// Keyboard navigation: Left/Right arrows map to Previous/Next
document.addEventListener("keydown", (event) => {
  if (navButtons.style.display === "none") return; // disable during polaroid mode
  if (event.key === "ArrowLeft") {
    if (currentIndex > 0) showConversation(currentIndex - 1);
  } else if (event.key === "ArrowRight") {
    if (currentIndex < conversations.length - 1)
      showConversation(currentIndex + 1);
  }
});






