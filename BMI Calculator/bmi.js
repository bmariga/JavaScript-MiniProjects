// Select button 

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




});
