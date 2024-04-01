let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winnerMess = document.querySelector(".winner");
let message = document.querySelector("#mess"); 
let turnO = true;  //player O

let pattern = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],
[2,4,6],[3,4,5],[6,7,8]]

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        // console.log("Box was clicked");
        if(turnO===true){
            box.innerText = "O";
            turnO=false;
        }
        else{
            box.innerText= "X";
            turnO=true;
            box.style.color ="green";
        }
       box.disabled = true;

       winner();
    });
});

let disableBoxes=()=>{
    for(box of boxes){
        box.disabled=true;
    }
}

let enableBoxes=()=>{
    for(box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
let showWinner = (winner)=>{
 message.innerText = `Congratulation, Winner is ${winner}`;
 winnerMess.classList.remove("hide");
 disableBoxes();
}

let winner=()=>{
    for(checkpattern of pattern ){
       // console.log(checkpattern[0],checkpattern[1],checkpattern[2]);
      let pos1 = boxes[checkpattern[0]].innerText;
      let pos2 = boxes[checkpattern[1]].innerText;
      let pos3 = boxes[checkpattern[2]].innerText;

      if(pos1 !="" && pos2 !="" && pos3 != ""){
        if(pos1 === pos2 && pos2===pos3){
            // console.log("Winner",pos1);
            showWinner(pos1);
        }
      }
    }
};

let resetGame=()=>{
    turnO = true;
    enableBoxes();
    winnerMess.classList.add("hide");
}

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);