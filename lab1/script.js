let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let roundCount = 0;

function play(userChoice) {
  // Check if game is over
  if (roundCount >= 3) {
    return;
  }

  roundCount++;

  // Computer makes random choice
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  // show picks
  document.getElementById('choices').textContent =
    'You chose: ' + userChoice + ' | Computer chose: ' + computerChoice;

  // checks for winner
  let result = checkWin(computerChoice, userChoice);

  // display the result
  document.getElementById('result').textContent = result;

  updateScoreDisplay();

  // Check if game is over
  if (roundCount >= 3) {
    let finalResult = '';
    if (playerScore > computerScore) {
      finalResult = ' - You won the game!';
    } else if (computerScore > playerScore) {
      finalResult = ' - Computer won the game!';
    } else {
      finalResult = ' - Game ended in a tie!';
    }
    document.getElementById('result').textContent += finalResult;
  }
}

function checkWin(computerInput, userInput) {
  // check for tie
  if (computerInput === userInput) {
    tieScore++;
    return "It's a tie!";
  }

  // check computer rock
  if (computerInput === 'rock') {
    if (userInput === 'scissors') {
      computerScore++;
      return 'You lose! Rock crushes scissors';
    } else {
      playerScore++;
      return 'You win! Paper covers rock';
    }
  }
  // check computer paper
  else if (computerInput === 'paper') {
    if (userInput === 'rock') {
      computerScore++;
      return 'You lose! Paper covers rock';
    } else {
      playerScore++;
      return 'You win! Scissors cuts paper';
    }
  }
  // computer has scissors
  else {
    if (userInput === 'paper') {
      computerScore++;
      return 'You lose! Scissors cuts paper';
    } else {
      playerScore++;
      return 'You win! Rock crushes scissors';
    }
  }
}

function updateScoreDisplay() {
  document.getElementById('roundCount').textContent = roundCount;
  document.getElementById('playerScore').textContent = playerScore;
  document.getElementById('computerScore').textContent = computerScore;
  document.getElementById('tieScore').textContent = tieScore;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  tieScore = 0;
  roundCount = 0;
  updateScoreDisplay();
  document.getElementById('choices').textContent = '';
  document.getElementById('result').textContent = '';
}
