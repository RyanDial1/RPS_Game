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
    let choice = "Rock";
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
    }
}
        
    
    
    



//game();
//console.log(playRound(humanPlay(), computerPlay()));


//Creating DOM element for Rock button
const container = document.querySelector('#container');
const resultContainer = document.querySelector('#resultContainer');

const rock = document.createElement('button');
rock.setAttribute('id', 'rock');
rock.textContent = 'Rock';

container.appendChild(rock); 

//Add event listener to Rock button 
const btn1 = document.querySelector('#rock');
btn1.addEventListener('click', () => {

    let result1 = playRound("Rock", computerPlay());
    const display1 = document.createElement('div');
    display1.style.border = "thick solid green";
    display1.textContent = result1;

    resultContainer.appendChild(display1);

});

//Creating DOM element for Paper button
const paper = document.createElement('button');
paper.setAttribute('id', 'paper');
paper.textContent = 'Paper';

container.appendChild(paper); 

//Add event listener to Paper button 
const btn2 = document.querySelector('#paper');
btn2.addEventListener('click', () => {
    let result2 = playRound("Paper", computerPlay());
    const display2 = document.createElement('div');
    display2.style.border = "thick solid red";
    display2.textContent = result2;

    resultContainer.appendChild(display2);
});

//Creating DOM element for Scissors button
const scissors = document.createElement('button');
scissors.setAttribute('id', 'scissors');
scissors.textContent = 'Scissors';

container.appendChild(scissors); 

//Add event listener to Paper button 
const btn3 = document.querySelector('#scissors');
btn3.addEventListener('click', () => {
    let result3 = playRound("Scissors", computerPlay());
    const display3 = document.createElement('div');
    display3.style.border = "thick solid #0390AF";
    display3.textContent = result3;

    resultContainer.appendChild(display3);


});

    




