let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let message  = document.querySelector("#message");
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#computer-score");
let generateComputerChoice = () =>{
  let options  = ["rock","paper", "scissors"];

  let Rindex = Math.floor(Math.random()*3);
  return options[Rindex];
}

let showWinner =(userWin,userChoice,compChoice) =>{
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    // console.log("You Win");
    message.innerText = `You win ! Your choice ${userChoice} Beats ${compChoice}`;
    message.style.backgroundColor = "Green";
  }
  else{
    compScore++;
    compScorePara.innerText = compScore;
    // console.log("You loose");
    message.innerText = `You loose ! Computers choice ${compChoice} Beats Your choice ${userChoice}`;
    message.style.backgroundColor = "Red";
  }
}

let playGame = (userChoice) =>{
 console.log("User choice = ", userChoice);

 //generate computer choice
 let compChoice = generateComputerChoice();
//  console.log("Computer choice = ", compChoice);

 if(userChoice=== compChoice){
    // console.log("Draw");
    message.innerText = "Game Draw Play Again";
    message.style.backgroundColor = "blue ";
 }
 else{
    let userWin = true;
    if(userChoice === "rock"){
        //s,p
        userWin = compChoice === "paper"?false:true;
    }

    else if(userChoice === "paper"){
        //r,s
        userWin = compChoice === "scissors"?false:true;
    }
    else{
        //r,p
        userWin = compChoice === "rock"?false:true;
    }
  showWinner(userWin,userChoice,compChoice)  
 }
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice selected",userChoice);
        playGame(userChoice);
    });
});