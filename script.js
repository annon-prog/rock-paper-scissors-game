//Storing Dom elements as variables
let computerChoice = document.getElementById("computerChoice");
let results = document.getElementById("resultDisplay");
let playerChoice = document.getElementById("playerChoice");
let score = document.getElementById("score");
let paper = document.getElementById("paper");
let rock = document.getElementById("rock");
let scissors = document.getElementById("scissors");

//initializing variables for player's choice
let paperVal;
let rockVal;
let scissorsVal;
let computerVal;

//Adding events to my buttons to store values
paper.addEventListener("click", () => {
   paperVal =  paper.dataset.value = "paper";
});

rock.addEventListener("click", () => {
 rockVal = rock.dataset.value = "rock";
});
scissors.addEventListener("click", () => {
 scissorsVal =  scissors.dataset.value = "paper";
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
    compareValues(str1, str2);
  }
};

//Display message of wins, losses and ties
function displayMessage(val1, val2) {
    let res = findWinner(val1, val2);

    if (res === 0) {
        results.textContent = "It's a tie !!!";
        return "tie";
    } else if (res === 1) {
        results.textContent = "Congrats!! You won this round."
        score ++;
        return "win";
    } else {
        results.textContent = "Sorry. You lost this round."
        return "loss";
    }
}

//Change the avatar from the displays
function displayEmojis(user, computer) {
    
}


