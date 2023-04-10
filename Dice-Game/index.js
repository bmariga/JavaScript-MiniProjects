//Random Number1 from 1 - 6 
var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
//Random Dice dice1.png - dice6.png
var randomDiceImage1 = "dice" + randomNumber1 + ".png";
//Source of Image1
var randomDiceSource1 = "images/" + randomDiceImage1;
//Select image1 to be responsive with JS
var image1 = document.querySelectorAll("img")[0];
//Connect var image1  to src attribute
image1.setAttribute("src", randomDiceSource1);

//Random Number2 from 1 - 6
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);
//Random Dice dice1.png - dice2.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
//Source of Image2
var randomDiceSource2 = "images/" + randomDiceImage2;
//Select image2 to be responsive with JS
var image2 = document.querySelectorAll("img")[1];
//Connect var image2  to src attribute
image2.setAttribute("src", randomDiceSource2);

//If Player1 Wins
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 1 WINS!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "PLAYER 2 WINS!";
} else { 
    document.querySelector("h1").innerHTML = "GAME IS A DRAW!";
}

//DATE
function displayDate() {
    document.getElementsByClassName("date").innerHTML = Date();
}

//document.write(Date());