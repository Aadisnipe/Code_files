const choice =["rock","paper","scissor"];
const playerchoice =document.getElementById("playerchoice");
const CPUchoice =document.getElementById("CPUchoice");
const tresult =document.getElementById("result");
const playerscore = document.getElementById("playerscore");
const CPUscore = document.getElementById("CPUscore");

let pscore=0;
let Cscore=0;
 function game(pchoice){
    let Cchoice;
    let result ="";
    Cchoice = choice[Math.floor(Math.random()*3)]
    if (pchoice === Cchoice) {
        result="Its A Tie";
    }
    else{
        switch(pchoice){
            case "rock":
                result= (Cchoice==="scissor") ? "You Win" : "You Lose";
                break;
            case "paper":
                result= (Cchoice==="rock") ? "You Win" : "You Lose";
                break;
            case "scissor":
                result= (Cchoice==="paper") ? "You Win" : "You Lose";
                break;             
        }
    }

    playerchoice.textContent=pchoice;
    CPUchoice.textContent=Cchoice;
    tresult.classList.remove("win","lose")
    tresult.textContent=result;
    if (result==="You Win") {
        pscore++;
        playerscore.textContent=pscore;
        tresult.classList.add("win");
    }
    if (result==="You Lose") {
        Cscore++;
        CPUscore.textContent=Cscore;
        tresult.classList.add("lose");
    }
 }