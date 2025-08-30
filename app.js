let gameSeq=[];
let userSeq=[];

let btns=["yellow","blue","pink","green"];



let started = false;
let level = 0;


let h2=document.querySelector("h2");

document.addEventListener("keypress", function() {
   if(started==false)
   {
    console.log("game is started");
    started=true;
   }
   levelUp();
});




function gameflash(btn){

btn.classList.add("flash");
    setTimeout(function(){
btn.classList.remove("flash");
    },250);
}



function userflash(btn){

btn.classList.add("userflash");
    setTimeout(function(){
btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq=[];
level++;
h2.innerHTML=`Level ${level}`;


let randIdx=Math.floor(Math.random()*3);
let randBtn=btns[randIdx];
let randColor=document.querySelector(`.${randBtn}`);
gameSeq.push(randBtn);
console.log(gameSeq);
gameflash(randColor);
}

function checkAns(idx){
//   

if(userSeq[idx]===gameSeq[idx]){
    if(userSeq.length==gameSeq.length){
        setTimeout(levelUp,1000);
    }
}else{
    h2.innerHTML=`Game over! <b>Your Score Was:${level}</b> <br>
    press any key to press`;

    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
document.querySelector("body").style.backgroundColor="white";
    },1000);
    reset();
}
}


function btnpress(){
    console.log(this);
    let btn=this;
    userflash(btn);
     userColor=btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}


let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnpress);
}

function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}