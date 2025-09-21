let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newbtn= document.querySelector("#new-btn");
let msg= document.querySelector("#msg");
let msgconatiner=document.querySelector(".msg-container");
let player1Name = "Player 1";
let player2Name = "Player 2";

let turno=true;
let count=0;
const winpattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
const resetgame = () => {
    turno=true;
    count=0;
    enebelboxes();
    msgconatiner.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turno){
            box.innerText="O";
            box.style.color="white"
            turno=false;
        }
        else{
             box.innerText="X";
             box.style.color="brown"
            turno = true;
        }
        box.disabled = true;
        count++;
        let iswinner=checkwinner();

        if(count === 9 && !iswinner){
            gamedraw();
        }
    });
});

const gamedraw =()=>{
    msg.innerText="Game is Draw";
    msgconatiner.classList.remove("hide");
    disableboxes();
}

const checkwinner = () =>{
for (let pattern of winpattern ){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;


    if( pos1val!="" && pos3val!="" && pos2val!= "" ){
        if(pos1val === pos2val && pos2val === pos3val){
        showwiner(pos1val);
        return true;
    }
} 
}
}

const showwiner = (winner) => {
let winnerName = (winner === "O") ? player1Name : player2Name;
msg.innerText = `Congratulations 🎉 Winner is ${winnerName}`;
msgconatiner.classList.remove("hide");
disableboxes();
}

function disableboxes(){
for(let box of boxes){
    box.disabled = true;
}
};

function enebelboxes(){
for(let box of boxes){
    box.disabled = false;
    box.innerText="";
}
};
newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click",resetgame);
const overlay = document.getElementById("overlay");
const playerForm = document.getElementById("player-form");

playerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  player1Name = document.getElementById("player1").value.trim() || "Player 1";
  player2Name = document.getElementById("player2").value.trim() || "Player 2";
  overlay.classList.add("hide-overlay");
});