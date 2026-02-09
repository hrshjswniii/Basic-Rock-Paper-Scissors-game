let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const drawGame= () => {
    console.log("game was draw!!");
    msg.innerText="game draww!!";
    msg.style.backgroundColor="grey";
}

const showWinner= (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText=`User Score: ${userScore}`;
        msg.innerText="you winn!!";
        msg.style.backgroundColor="green";
    }
    
    else{
        compScore++;
        compScorePara.innerText=`Computer Score: ${compScore}`;
        msg.style.backgroundColor="red";
    }
}


const genCompChoice = () => {
    const options= ["rock", "paper0", "scissors"];
    const randomIndex= Math.floor(Math.random()*3);
    return randomIndex;
}

const playGame = {userChoice} => {
    const compchoice= gencompchoice();
    console.log("omp choice= ", compChoice);
}

if(userchoice == compChoice){
    drawGame();
}
else{
    let userWin=true;
    if (userChoice=="rock"){
        userWin= compChoice === "paper" ? false : true;
    }
    else if (userChoice=="paper"){
        userWin= compChoice === "scissors" ? false : true;
    }
    else (userChoice=="scissors"){
        userWin= compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
}
    

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});