window.addEventListener("load",calculateTime)

function calculateTime() {

    var date = new Date();
    var dayNumber = date.getDay();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hour >= 12 ? "PM" : "AM";
    var dayNames = ["SUN","MON","TUE","WED","THUR","FRI","SAT"];
    
    // Change to 12HR Format
    hour = hour % 12;
    // Noon (12 PM)not to return 0
    hour = hour ? hour : "12";
    // Add O infront if hour < 10
    hour = hour < 10 ? "0" + hour : hour;
    // Add 0 infront if minute < 10
    minute = minute < 10 ? "0" + minute : minute;
    // Add 0 infront if seconds < 10
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    document.getElementById("day").innerHTML = dayNames[dayNumber];
    document.getElementById("hour").innerHTML = hour;
    document.getElementById("minute").innerHTML = minute;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("am-pm").innerHTML = ampm;

    // Calculate time over and over again
    setTimeout(calculateTime,1000);
}

calculateTime();