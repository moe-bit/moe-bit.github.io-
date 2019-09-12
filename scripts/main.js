var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc !== "bilder/bilder-erde.jpg") {
        myImage.setAttribute('src', "bilder/bilder-erde.jpg");
    } else {
        myImage.setAttribute('src', "bilder/eine-siedlung.jpg");
    }
}

var myButton = document.querySelector("button");
var myHeadding = document.querySelector("h1");

function setUserName() {
    var myName = prompt("Bitte geben Sie einen Namen ein");
    localStorage.setItem("name", myName);
    myHeadding.textContent = myName + " ist cool!";

    if (!localStorage.getItem("name")) {
        setUserName();
    } else {
        var storedName = localStorage.getItem("name");
        myHeadding.textContent = myName + " ist cool!";
    }

}

myButton.onclick = function () {
    setUserName()
}
