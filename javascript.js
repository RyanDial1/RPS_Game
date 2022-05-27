function computerPlay(){
    //computer that will randomly return Rock, Paper, Scissors
    let choice = (Math.floor(Math.random() * 3))

    if(choice === 0){
        return "Rock"
    }

    else if (choice === 1 ){
        return "Paper"
    }

    else if (choice === 2){
        return "Scissors"
    }

}

function humanPlay(){ //function that will get input from user
    let choice = prompt("Choose Rock, Paper, Scissors: ")
    return choice;

}


function playRound(playerSelection, computerSelection){ //function that will determine winner
    if(playerSelection === "Rock" && computerSelection === "Rock"){
        return "Rock vs Rock results in a tie"
    }

   else if(playerSelection === "Paper" && computerSelection === "Paper"){
        return "Paper vs Paper results in a tie"
    }

    else if(playerSelection === "Scissors" && computerSelection === "Scissors"){
        return "Scissor vs Scissor results in a tie"
    }

    else if(playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You win! Rock beats scissors"
    }

    else if(playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper"
    }

    else if(playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You win! Scissors cut paper"
    }

    else if(playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose! Rock crushes scissors"
    }
    else if(playerSelection === "Paper" && computerSelection === "Rock"){
        return "You win! Paper covers rock"
    }
    else if(playerSelection === "Rock" && computerSelection === "Paper"){
        return "You lose! Paper covers rock"
    }
}

function game(){ //play game 5 times
    for (let i=0; i < 5; i++){
        
        console.log(playRound(humanPlay(), computerPlay()));
    }
    
    
}


game();

