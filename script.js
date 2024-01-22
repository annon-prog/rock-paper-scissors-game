//Storing Dom elements as variables
let computerChoice = document.getElementById("computerChoice");
let results = document.getElementById("resultDisplay");
let playerChoice = document.getElementById("playerChoice");
let playerScore = document.getElementById("playerScore");
let computerScore = document.getElementById("computerScore");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");

//initializing variables for player's choice
let playerVal;
let computerVal;
let playerScores = 0;
let computerScores = 0;

//Adding events to my buttons to store values
paper.addEventListener("click", () => {
  playerVal= "paper";
  playGame();
});

rock.addEventListener("click", () => {
  playerVal = "rock";
  playGame();
});
scissors.addEventListener("click", () => {
  playerVal = "scissors";
  playGame();
});

//Letting the computer choose.
let compChoice = () => {
    let choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    computerVal = choices[randomIndex];
    return computerVal;
}

//Helper function for findWinner. Needs to be refactored.
function compareValues(val1, val2) {
  if (val1 === "rock") {
    if (val2 === "scissors") {
        return 1;
    } else {
     return -1;
    }
  }

  if (val1 === "scissors") {
    if (val2 === "paper") {
      return 1;
    } else {
     return -1;
    }
  }

  if (val1 === "paper") {
    if (val2 === "rock") {
     return 1;
    } else {
      return -1;
    }
  }
}

//This function helps find a tie, a win or a lose.
let findWinner = (str1, str2) => {
  if (str1 === str2) {
    return 0;
  } else {
   return compareValues(str1, str2);
  }
};

//Display message of wins, losses and ties
function displayMessage(val1, val2) {
    let res = findWinner(val1, val2);

    if (res === 0) {
        results.textContent = "It's a tie !!!";  
    } else if (res === 1) {
      results.textContent = "Congrats!! You won this round."
      playerScores ++;
      playerScore.textContent = `Player two score: ${playerScores}`;
    } else {
      results.textContent = "Sorry. You lost this round."
       computerScores++;
       computerScore.textContent = `Player one score: ${computerScores}`;
    }
}

//Display emojis in the player's div container
function displayPlayerEmojis() {
  if (playerVal === "paper") {
    playerChoice.textContent = "🤚🏽";
  }else if (playerVal === "scissors") {
    playerChoice.textContent = "✌🏽";
  }else  if (playerVal === "rock") {
    playerChoice.textContent = "✊🏽";
  }
}

//Display emojis in the computer's div container 
function displayComputerEmojis() {
  if (computerVal === "rock") {
    computerChoice.textContent = "✊🏽";
  }else if (computerVal === "paper") {
     computerChoice.textContent = "🤚🏽";
   }else if (computerVal === "scissors") {
     computerChoice.textContent = "✌🏽";
   }
}

//Function to play the game
function playGame() {
  compChoice();
  displayMessage(playerVal, computerVal);
  displayPlayerEmojis();
  displayComputerEmojis();
}
