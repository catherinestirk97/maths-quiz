//using gitHubDesktop 

let x = (Math.round(Math.random() * 12));
let y = (Math.round(Math.random() * 12));  
let total = x+y;

document.getElementById("calculation").innerHTML = `${x} + ${y}`

function generateNewNumber(){
    x = (Math.round(Math.random() * 12));
    y = (Math.round(Math.random() * 12)); 
    total = x+y;
    document.getElementById("calculation").innerHTML = `${x} + ${y}`
}

function reset(){
    document.getElementById("userInput").value = "";
}

function checkAnswer(){
    let answer = parseInt(document.getElementById("userInput").value);
    console.log(answer);
if(total === answer){
    alert("Congratulations! That was the right number");
    generateNewNumber();
    reset();
} else {
    alert("Sorry that was incorrect! Please try again");
    console.log(answer)
    reset();
}
}
