// Select button in HTML

const btn = document.getElementById("calculate");

btn.addEventListener("click", () => {

    let height = document.querySelector("#height").value;
    let weight = document.querySelector("#weight").value;

// Condition to fill input fields

    if(height =='' || weight == '') {
        alert("Input fields are required");
        return;
    } 

// BMI Calculation

height = height / 100;

let bmi = (weight / (height ^ 2)); 

 bmi = bmi.toFixed(2);

document.querySelector("#result").innerHTML = bmi;

// BMI Comment

if(bmi < 18.5) {
    document.querySelector(".comment").innerHTML = "You are Underweight";
} else if(bmi >= 18.5 && bmi < 25) {
    document.querySelector(".comment").innerHTML = "You are Healthy";
} else if(bmi >= 25 && bmi < 30) {
    document.querySelector(".comment").innerHTML = "You are Overweight";
} else {
    document.querySelector(".comment").innerHTML = "You are Obese";
}




});
