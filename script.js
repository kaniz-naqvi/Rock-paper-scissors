let userScore=0;
let compScore=0;

const choice=document.querySelectorAll(".choise");
choice.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoiceId=choice.getAttribute("id");
        console.log("User chose: "+ userChoiceId);
        playGame(userChoiceId);
    });
});
function playGame(userChoiceId){
    let compChoices=["rock", "paper", "scissors"];
    //making randon computer chiose
    let randomindx=Math.floor(Math.random() * 3);
    let compChoiceId=compChoices[randomindx];
    console.log("Computer chose:", compChoiceId); 

    let message=document.querySelector("button");
    if(compChoiceId===userChoiceId){
        message.innerHTML="it's a tie!";
        message.style.backgroundColor="black";
    }
    else if((compChoiceId==="rock"&&userChoiceId==="paper")||
    (compChoiceId==="paper"&&userChoiceId==="scissors")||
    (userChoiceId==="rock"&&compChoiceId==="scissors")
    ){
        message.innerHTML="You won 🎉 " + userChoiceId+" beats the "+ compChoiceId;
        message.style.backgroundColor="green";
        userScore++;
        document.querySelector(".userScore").innerHTML=userScore;
    }else {
        message.innerHTML="You loose 😔 "+ compChoiceId +" beats the "+ userChoiceId ;
        message.style.backgroundColor="red";
        compScore++;
        document.querySelector(".computerScore").innerHTML=compScore;
    }
}

