const gameList = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    return gameList[Math.floor(Math.random() * gameList.length)]
}
function getHumanChoice(){
    a = prompt('Hi, choose one word from the three:: rock, paper, scissors ')
    return a.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
    // human win
    if (
    (humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'paper' && computerChoice === 'rock') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') 
  ) {
    humanScore++;
}
  // computer win  
    else if (
    (computerChoice === 'rock' && humanChoice === 'scissors') ||
    (computerChoice === 'paper' && humanChoice === 'rock') ||
    (computerChoice === 'scissors' && humanChoice === 'paper')
  ) {
    computerScore++;
  }
  return 'Draw'
}

function playGame() {
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    playRound(getComputerChoice(), getHumanChoice())
    function winner(){
        if (humanScore > computerScore) {
            console.log('Human won')
        }
        else if (humanScore < computerScore) {
            console.log('Computer Won')
        }
        else console.log('Draw')
    }
    winner()
}
playGame()
console.log(computerScore)
console.log(humanScore)