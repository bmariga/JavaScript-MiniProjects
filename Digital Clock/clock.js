function calculateTime() {

    var date = new Date();
    var dayNumber = date.getDay();
    var hourNumber = date.getHours();
    var minuteNumber = date.getMinutes();
    var secondsNumber = date.getSeconds();
    console.log(date);
}

calculateTime();