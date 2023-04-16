
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
    // To work for both playing sound in nextSequence() and when the user clicks a button

    // Play sound when button clicked and in nextSequence
    playSound(randomChosenColour);
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor) {
    // Add this pressed class to the button that gets clicked inside animatePress()
    $("#" + currentColor).addClass("pressed");
    // Remove the pressed class after a 100 milliseconds
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
      }, 100);
}