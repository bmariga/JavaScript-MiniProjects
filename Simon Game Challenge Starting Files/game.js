
//Array of colours
var buttonColours = ["red","blue", "green", "yellow"];

// Empty Array
var gamePattern = [];

// Empty Array
var userClickedPattern = [];

// Keep track if game has started or not. Only call nextSequence on first keypress
var started = false;
// New level starts at 0
var level = 0;

// Detects when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
$(document).keypress(function(){
    if(!started) {
        // When game has started h1 changes to level 0
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;

    }

});

// Detect when buttons are clicked
$(".btn").click(function() {

    // UserChosenColour to store the id of the button that got clicked
    var userChosenColour = $(this).attr("id");
    // Add chosen colour to empty array userClickedPattern
    userClickedPattern.push(userChosenColour);
    // Plays sound when button clicked
    playSound(userChosenColour);
    // Animation when button clicked
    animatePress(userChosenColour);

    // After a user has clicked and chosen their answer, passes in the index of the last answer in the user's sequence.
    checkAnswer(userClickedPattern.length-1);

});

// Function checkAnswer()
function checkAnswer(currentLevel) {

    // Check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong"
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

        console.log("success");

        // If the user got the most recent answer, then checks that they have finished their sequence with another if statement.
      if (userClickedPattern.length === gamePattern.length){

        // Call nextSequence() after a 1000 millisecond delay.
        setTimeout(function () {
          nextSequence();
        }, 1000);

      }

} else {
    console.log("Fail");
}
}

// Function nextSequence
function nextSequence() {
    // Increment level from 0 to 1, 2, ..... everytime nextSequence is called
    level++;
    // Update h1 to level number
    $("#level-title").text("Level " + level);

    // Random number 0 - 3 
    var randomNumber = Math.floor(Math.random() * 4); 
    // Select a random colour
    var randomChosenColour = buttonColours[randomNumber];
    // Add random colour to empty array gamePattern
    gamePattern.push(randomChosenColour);
    // Fade in Fade out 
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    // To work for both playing sound in nextSequence() and when the user clicks a button
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