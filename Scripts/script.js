// FLASHLIGHT & CAMERA CURSOR EFFECT

const mouseEvent = document.documentElement;
const cursor = document.querySelector('.cursor');

mouseEvent.addEventListener('mousemove', (e) => {
    mouseEvent.style.setProperty('--x', e.clientX + 'px');
    mouseEvent.style.setProperty('--y', e.clientY + 'px');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
}); 



// FLASHLIGHT CLICK EFFECT & SNAPSHOT POPUP

var illumination = document.querySelector('.illumination');
var flash = 10; // The gradient size in percent
var clickDelay = false

document.addEventListener('click', function() {
    // SNAPSHOT POPUP VARIABLE
    var frameElement = document.querySelector('.frame');

    // Prevent the flash from happening if the user double clicks
    if (clickDelay) {
        return;
    }

    setTimeout(function() {
        
    }, 3000); // duration of the delay (3 seconds)
    // initiates the flash effect by increasing the gradient size to 70%
    flash += 60;  
    illumination.style.setProperty('--gradient-size', flash + '%'); // Update the CSS variable
        
    // initiates the snapshot popup by toggling the popup class
    setTimeout(function() {
        frameElement.classList.toggle('popup');
    }, 500); // duration of the delay (0.5 seconds)

    // reverts the flash back to 10% after 150 milliseconds
    setTimeout(function() {
        flash -= 60; 
        illumination.style.setProperty('--gradient-size', flash + '%');
    }, 250); // duration of the flash

    // sets the flash delay to true
    clickDelay = true;

    // resets the flash delay to false after 2 seconds
    setTimeout(function() {
        frameElement.classList.toggle('popup');
        clickDelay = false;
    }, 2870); // duration of the delay (2.87 seconds)

});



// FLASHLIGHT CLICK SOUND

function play() {
    var audio = document.getElementById("audio");
    audio.volume = 0.5;
    audio.play();
}
