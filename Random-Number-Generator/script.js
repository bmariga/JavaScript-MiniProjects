  //Allow access to button 
 var button = document.getElementById("generatebtn");

  //Run the function on button click
  button.onclick = function generate() {

  // Create a variable to hold a random number between 1 and 100
  var randomNumber = Math.floor((Math.random() * 100) + 1);

  // Create a variable el to hold the ranNumber element
  var el = document.getElementById('number');
  // Write the number into that element
  el.innerHTML = randomNumber;
 }