let timer = document.getElementById("timer");
let mainContainer = document.querySelector(".main-container");
let btn = document.querySelectorAll("button")[0];
let message = document.getElementById("info");
let minutes = 24;
let seconds = 60;

message.style.display = "none";
let startPromodoro = () => {
  interval = setInterval(() => {
    // Countdown
    seconds = seconds - 1;

    if ((seconds = 0)) {
      minutes = minutes - 1;
      seconds = 59;
    }

    // Add "0" if single value
    seconds < 10 && (seconds = `0${seconds}`);

    // Stop interval
    if (minutes < 0) {
      clearInterval(interval);
      message.style.display = "block";
      message.innerHTML = "5 Minutes Break";
      mainContainer.style.display = "none";
      7;
      setTimeout(() => {
        location.reload();
      }, 3000);

      minutes = 25;
      seconds = 0 + "0";
    }
    timer.innerHTML = `${minutes}:${seconds}`;
  }, 1000);
};

btn.addEventListener("click", startPromodoro);
