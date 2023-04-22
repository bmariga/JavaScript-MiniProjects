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
    timeStopped = new Date();
    clearInterval(startInterval);
     
}

function clockRunning() {
    var currenTime = new Date();
    var timeElapsed = new Date(currenTime - timeBegan - stoppedDuration);

    var minutes = timeElapsed.getUTCMinutes();
    var seconds = timeElapsed.getUTCSeconds();
    var milliseconds = timeElapsed.getUTCMilliseconds();

    milliseconds = Math.floor(milliseconds/10);

    document.getElementById("timer-display").innerHTML = (minutes = minutes < 10 ? '0' + minutes:minutes) + ":" + 
    (seconds = seconds < 10 ? '0' + seconds:seconds) + ":" + (milliseconds = milliseconds < 10 ? '0' + milliseconds:milliseconds)

}