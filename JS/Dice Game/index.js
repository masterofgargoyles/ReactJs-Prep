var randomNumber1 = Math.floor((Math.random()*6) + 1);
var newDiceImage = "images/dice"+randomNumber1+".png";
// Changing  the image name
document.querySelector(".dice .img1").setAttribute("src", newDiceImage);

var randomNumber2 = Math.floor((Math.random()*6) + 1);
var newDiceImage = "images/dice"+randomNumber2+".png";
// Changing  the image name
document.querySelector(".dice .img2").setAttribute("src", newDiceImage);

if(randomNumber1>randomNumber2){
    // 1 wins
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if(randomNumber1==randomNumber2){
    // Draw
    document.querySelector("h1").textContent = "Draw!";
}
else{
    // 2 wins
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
    





