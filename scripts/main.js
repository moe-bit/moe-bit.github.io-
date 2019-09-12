var myImage = document.querySelector('img');

myImage.onclick = function () {
    var mySrc = myImage.getAttribute('src');
    if (mySrc !== "bilder/blick-hang.jpg") {
        myImage.setAttribute('src', "bilder/blick-hang.jpg");
    } else if (mySrc !== "bilder/blick-osten.jpg") {
        myImage.setAttribute('src', "bilder/blick-osten.jpg");
    } else {
        myImage.setAttribute('src', "bilder/blick-sueden.jpg");
    }
}


