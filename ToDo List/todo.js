const toDoItems = document.getElementsByClassName("to-do-items")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown", function(event) {
    if(event.key === "Enter")
    addItem();
});

function addItem() {
    var divParent = document.createElement("div");
    var divChild = document.createElement("div"); 
    var checkicon = document.createElement("i");
    var trashicon = document.createElement("i");

    divParent.className = "items";
    divParent.innerHTML = "<div>"+ input.value +"</div>";

    checkicon.className = "fa-solid fa-circle-check";
    checkicon.style.color = "black";
    checkicon.addEventListener("click", function() {
        checkicon.style.color = "darkgray";
    })

    divChild.appendChild(checkicon);

    trashicon.className = "fas fa-trash";
    trashicon.style.color = "black";
    trashicon.addEventListener("click", function() {
        divParent.remove();
    })

    divChild.appendChild(trashicon);

    divParent.appendChild(divChild);

    toDoItems.appendChild(divParent);

    input.value = "";


}