document.getElementById('button').onclick = () => {
  const playGame = () => {

      const userInput = document.getElementById('user-choice').value;
      const userChoice = getUserChoice(userInput);
      const computerChoice = getComputerChoice();

      const userChoiceText = `User Choice: ${userChoice}`;
      const computerChoiceText = `Computer Choice: ${computerChoice}`;
      const resultText = determineWinner(userChoice, computerChoice);

      document.getElementById('output1').innerHTML = `
          <p>${userChoiceText}</p>
      `;

      document.getElementById('output2').innerHTML = `
      <p>${computerChoiceText}</p>
      `;

      document.getElementById('output3').innerHTML = `
      <p>${resultText}</p>
      `;
  };

  playGame();
};

const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
if (
  userInput === "rock" ||
  userInput === "paper" ||
  userInput === "scissors" ||
  userInput === "bomb"
) {
  return userInput;
} else {
  console.log("ERROR");
}
};

const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3);
if (randomNumber === 0) {
  return "rock";
} else if (randomNumber === 1) {
  return "paper";
} else if (randomNumber === 2) {
  return "scissors";
}
};

const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return "The game is a tie!";
}
if (userChoice === "rock") {
  if (computerChoice === "paper") {
    return "The computer won!";
  } else {
    return "You won!";
  }
}

if (userChoice === "paper") {
  if (computerChoice === "scissors") {
    return "The computer won!";
  } else {
    return "You won!";
  }
}

if (userChoice === "scissors") {
  if (computerChoice === "rock") {
    return "The computer won!";
  } else {
    return "You won!";
  }
}

if (userChoice === "bomb") {
  return "You Won!";
}
};