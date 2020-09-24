let x = (Math.round(Math.random() * 11)+1);
// console.log(x);
let y = (Math.round(Math.random() * 11)+1);  
// console.log(y);
let z = x*y;
// console.log(z);
let total = z/x;


document.getElementById("calculation").innerHTML = `${z} / ${x}`

function generateNewNumber(){
    x = (Math.round(Math.random() * 11)+1);
    y = (Math.round(Math.random() * 11)+1);
    z =x*y;
    total = z/x;
    document.getElementById("calculation").innerHTML = `${z} / ${x}`
}

function reset(){
    document.getElementById("userInput").value = "";
}

function checkAnswer(){
    let answer = parseInt(document.getElementById("userInput").value);
    console.log(answer);
if(total === answer){
    alert("Congratulations! That was the right answer.");
    generateNewNumber();
    reset();
    changeBackgroundColor();
} else {
    alert("Sorry that was incorrect! Please try again.");
    console.log(answer)
    reset();
}
}

function changeBackgroundColor() {
    let background = document.querySelector(".changeColor");
    background.style.animation = 'none';
    background.offsetHeight; /* trigger reflow */
    background.style.animation = null; 
}