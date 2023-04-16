
//Array of colours
var buttonColours = ["red","blue", "green", "yellow"];

// Empty Array
var gamePattern = [];

// Function nextSequence
function nextSequence() {
    // Random number 0 - 3 
    var randomNumber = Math.floor(Math.random() * 4); 
    // Select a random colour
    var randomChosenColour = buttonColours[randomNumber];
    // Add random colour to empty array
    gamePattern.push(randomChosenColour);

    // Fade in Fade out 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // Play sound when button clicked
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    
}
