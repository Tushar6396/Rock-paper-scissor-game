
const totalScore = {playerScore : 0 , computerScore : 0}
// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  const choice = ['Rock','Paper','Scissors']
  const randomChoice = Math.floor(Math.random() * 3)
  return choice[randomChoice]
}
 

function getResult(playerChoice, computerChoice) {
  let score;

  if(playerChoice == computerChoice)
    score = 0
  
  else if(playerChoice == 'Rock' && computerChoice == 'Scissors')
    score = 1
  else if(playerChoice == 'Paper' && computerChoice == 'Rock')
    score = 1
  else if(playerChoice == 'Scissors' && computerChoice == 'Paper')
    score = 1

  else
    score = -1

  return score;
}


function showResult(score, playerChoice, computerChoice) {
  const playerScoreDiv = document.getElementById('player-score')
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  
  if(score == 1)
    resultDiv.innerText = 'You Won!'
  else if(score  == -1)
    resultDiv.innerText = 'You Lost!'
  else
    resultDiv.innerText = 'Draw'

  handsDiv.innerText = `${playerChoice} Vs ${computerChoice}`
  playerScoreDiv.innerText = `PlayerScore: ${totalScore['playerScore']}`

}

function onClickRPS(playerChoice) {
  console.log({playerChoice})
  const computerChoice = getComputerChoice()
  console.log({computerChoice})
  const score = getResult(playerChoice,computerChoice)
  totalScore['playerScore'] += score
  console.log({score})
  console.log({totalScore})
  showResult(score , playerChoice , computerChoice)
  
}

function playGame() {
  const rpsButtons = document.querySelectorAll('.rpsButton')
  rpsButtons[0].onclick = () => console.log(rpsButtons[0].value)
 
  rpsButtons.forEach(rpsButtons => {
    rpsButtons.onclick = () => onClickRPS(rpsButtons.value)
})
 
  const endGameButton = document.getElementById('endGameButton')
  endGameButton.onclick = () => endGame();
}

function endGame() {
  const playerScoreDiv = document.getElementById('player-score')
  const handsDiv = document.getElementById('hands')
  const resultDiv = document.getElementById('result')
  resultDiv.innerText = ''
  handsDiv.innerText = ''
  playerScoreDiv.innerText = ''
}

playGame()
