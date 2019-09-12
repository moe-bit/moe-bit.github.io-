var myButton = document.querySelector("button");


function setUserName() {
    var myName = prompt("Bitte geben Sie einen Namen ein");
    localStorage.setItem("name", myName);

     givenName = document.getElementById("changedGreeting").innerText = myName;


}

myButton.onclick = function () {
    setUserName()
}