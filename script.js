const userScoreDisplay = document.getElementById('userScore');
const computerScoreDisplay = document.getElementById('computerScore');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('.choice');

let userScore = 0;
let computerScore = 0;
let round = 1;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function win(userChoice, computerChoice) {
  userScore++;
  userScoreDisplay.textContent = 'User: ' + userScore;
  resultDisplay.textContent = `Round ${round}: You win! ${userChoice} beats ${computerChoice}`;
}

function lose(userChoice, computerChoice) {
  computerScore++;
  computerScoreDisplay.textContent = 'Computer: ' + computerScore;
  resultDisplay.textContent = `Round ${round}: You lose! ${computerChoice} beats ${userChoice}`;
}

function draw(userChoice) {
  resultDisplay.textContent = `Round ${round}: It's a draw! You both chose ${userChoice}`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case 'rockscissors':
    case 'paperrock':
    case 'scissorspaper':
      win(userChoice, computerChoice);
      break;
    case 'rockpaper':
    case 'paperscissors':
    case 'scissorsrock':
      lose(userChoice, computerChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'scissorsscissors':
      draw(userChoice);
      break;
  }

  round++;

  if (round > 5) {
    endGame();
  }
}

function endGame() {
  if (userScore > computerScore) {
    resultDisplay.textContent = `You win the game! Final score: ${userScore}-${computerScore}`;
  } else if (userScore < computerScore) {
    resultDisplay.textContent = `Computer wins the game! Final score: ${userScore}-${computerScore}`;
  } else {
    resultDisplay.textContent = `It's a tie! Final score: ${userScore}-${computerScore}`;
  }

  choices.forEach(choice => {
    choice.disabled = true;
  });
}

choices.forEach(choice => {
  choice.addEventListener('click', function () {
    if (round <= 5) {
      game(this.id);
    }
  });
});
