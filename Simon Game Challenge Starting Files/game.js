
//Array of colours
var buttonColours = ["red","blue", "green", "yellow"];

// Empty Array
var gamePattern = [];

// Empty Array
var userClickedPattern = [];

// Detect when buttons are clicked
$(".btn").click(function() {

    // UserChosenColour to store the id of the button that got clicked
    var userChosenColour = $(this).attr("id");
    // Add chosen colour to empty array userClickedPattern
    userClickedPattern.push(userChosenColour);
    // Plays sound when clicked
    playSound(userChosenColour);

});

// Function nextSequence
function nextSequence() {
    // Random number 0 - 3 
    var randomNumber = Math.floor(Math.random() * 4); 
    // Select a random colour
    var randomChosenColour = buttonColours[randomNumber];
    // Add random colour to empty array gamePattern
    gamePattern.push(randomChosenColour);
    // Fade in Fade out 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // Play sound when button clicked
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
    
}
