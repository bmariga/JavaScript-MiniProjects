//  Did the clock start?
 var timeBegan = null;
//  At what time was the timer stopped?
 var timeStopped = null;
//  How long was the timer stopped?
 var stoppedDuration = 0;
//  To stop the startInterval() method
 var startInterval = null;
//  Control start stop timer
var flag = false; 

const timerContainer = document.geElementsByClassName("timer-container")[0];

timerContainer.addEventListener("click", function() {
    if (!flag) {
        startTimer();
        flag = true;
    } else {
        stopTimer();
        flag = false;
    }
})

function startTimer() {
    if (timeBegan === null)
    timeBegan = new Date();

    if (timeStopped !== null)
    stoppedDuration += (new Date() - timeStopped); 

    startInterval = setInterval(clockRunning, 10);

}

function stopTimer() {
     
}