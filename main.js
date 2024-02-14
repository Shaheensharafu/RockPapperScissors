let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    loses:0,
    ties:0
}

updateScore();

//play game

function playGame(playerMove){
    const computerMove = pickingCompMove();
    let result = '';
    if (computerMove === 'Rock'){
        if (playerMove === 'Rock'){
            result = 'Tie!'
        }else if(playerMove === 'Papper'){
            result = 'You win!'
        }else if(playerMove === 'Scissors'){
            result = 'You lose!'
        }
    }
    if (computerMove === 'Papper'){
        if (playerMove === 'Papper'){
            result = 'Tie!'
        }else if(playerMove === 'Rock'){
            result = 'You win!'
        }else if(playerMove === 'Scissors'){
            result = 'You lose!'
        }
    }
    if (computerMove === 'Scissors'){
        if (playerMove === 'Scissors'){
            result = 'Tie!'
        }else if(playerMove === 'Papper'){
            result = 'You win!'
        }else if(playerMove === 'Rock'){
            result = 'You lose!'
        }
    }

    const resultElement = document.querySelector('.result');
    resultElement.textContent = result;
    resultElement.classList.remove('result-win', 'result-lose', 'result-tie');
    if (result === 'You win!') {
        resultElement.classList.add('result-win');
    } else if (result === 'You lose!') {
        resultElement.classList.add('result-lose');
    } else {
        resultElement.classList.add('result-tie');
    }
    

    //score
    if(result === 'You win!'){
        score.wins += 1
    }else if(result === 'You lose!'){
        score.loses += 1
    }else if(result === 'Tie!'){
        score.ties += 1
    }
    
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();
    document.querySelector('.result').innerHTML = `${result}`;
    document.querySelector('.moves').innerHTML = `You ${playerMove} - ${computerMove} Bot`
}

function updateScore(){
    document.querySelector('.score').innerHTML = `Wins:${score.wins} Loses:${score.loses} Ties:${score.ties}`

}






// picking computer move 

function pickingCompMove(){
    const randomNumber = Math.random();
 
    let computerMove = '';

    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'Rock';
    }else if(randomNumber >=1/3 && randomNumber < 2/3){
        computerMove = 'Papper';
    }else if(randomNumber >=2/3 && randomNumber < 1){
        computerMove = 'Scissors'
    }

    return computerMove;

}