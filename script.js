//function to get computer's choice

function getComputerChoice () {
    const randomNum = Math.floor(Math.random() * 3);
    if (randomNum === 0){
        return "ROCK";
    } else if (randomNum === 1){
        return "PAPER";
    } else {
        return "SCISSORS"
    }
};


//function to show computer's choice on the screen

let computerChoice = document.querySelector('#computerchoice')
function showComputerChoice(){
    computerChoice.textContent = `Computer selected ${computerSelection}`;
}


//function that give result of one round of play

let resultOfOneRound = document.querySelector('#roundresult')
let roundResult;

function playRound(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        roundResult = "TIE";
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSORS")||(playerSelection==="PAPER" && computerSelection==="ROCK")||(playerSelection==="SCISSORS" && computerSelection==="PAPER")){
        roundResult =`You won!! ${playerSelection} beats ${computerSelection}.`;
    } else if ((playerSelection === "ROCK" && computerSelection === "PAPER")||(playerSelection==="PAPER" && computerSelection==="SCISSORS")||(playerSelection==="SCISSORS" && computerSelection==="ROCK")){
        roundResult =`You lost!! ${computerSelection} beats ${playerSelection}.`;
    } else{
        roundResult ="Invalid input.";
    }
    resultOfOneRound.textContent = roundResult;
    return roundResult;
}



let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
  
rockBtn.addEventListener('click', () =>{
    computerSelection = getComputerChoice(); 
    playRound("ROCK",computerSelection);
    getPoint();
    showComputerChoice();
    showFinalResult();
});

paperBtn.addEventListener('click', () =>{
    computerSelection = getComputerChoice(); 
    playRound("PAPER",computerSelection);
    getPoint();
    showComputerChoice();
    showFinalResult();
});

scissorsBtn.addEventListener('click', () =>{
    computerSelection = getComputerChoice(); 
    playRound("SCISSORS",computerSelection);
    getPoint();
    showComputerChoice();
    showFinalResult();
});



//function to get points of the player and the computer and show the result on the screen

let computerScore = document.querySelector('#computerscore');
let playerScore = document.querySelector('#playerscore');
let playerPoint = 0;
let computerPoint = 0;
function getPoint(){
    const winRegex = /You won/g;
    const loseRegex = /You lost/g;
    if (winRegex.test(roundResult)) {
        playerPoint += 1;
    } else if (loseRegex.test(roundResult)) {
        computerPoint += 1;
    }    
    playerScore.textContent = `Your Score ${playerPoint}`

    computerScore.textContent = `Computer's Score ${computerPoint}`
}


//function that gives final result untill either the player or the computer gets to 5 points

function showFinalResult() {
    if (playerPoint == 5 || computerPoint == 5){
        let result;
        if (playerPoint>computerPoint) {
            result = `You won!! by ${playerPoint-computerPoint} Points.`;
        } else if (playerPoint<computerPoint){
            result = `You lost!! by ${computerPoint-playerPoint} Points.`;
        } else {
            result = `Its a Tie you both scored ${playerPoint} Points.`;
        }
        let finalResult = document.querySelector('#finalresult');
        finalResult.textContent = result;
        
        hideElement(rockBtn,paperBtn,scissorsBtn,computerChoice,resultOfOneRound,computerScore,playerScore)

        let repalyBtn = document.createElement('button');
        repalyBtn.addEventListener('click', () => location.reload())
        repalyBtn.textContent = "REPLAY";
        repalyBtn.setAttribute("class", "btn")
        document.body.appendChild(repalyBtn);
    }
}


//funtion to hide elements for the final sresult screen

function hideElement(...elements) {
    elements.forEach(element => {
        element.setAttribute('hidden', '')        
    });
}