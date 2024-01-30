// CAMREC BORDER FADE IN

// activates when the page loads
window.addEventListener('DOMContentLoaded', () => {
    const camRec = document.querySelector('.camrec');

    // intially sets the opacity to 0
    camRec.style.opacity = '0';
    
    // duration of the fade in
    setTimeout(() => {
        camRec.style.transition = 'opacity 10s';
        camRec.style.opacity = '1';
    });
});



// TIMER

window.onload = function() {
    var count = 0;
    var timerNumber = document.getElementById('timer');

    setInterval(function() {
        count++;
        var minutes = Math.floor(count / 60);
        var seconds = count % 60;
        timerNumber.textContent = (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }, 1000);
};



// CURSOR COORDINATES

var cursorCoordinates = document.getElementById('coordinates');

document.addEventListener('mousemove', function(e) {
    cursorCoordinates.innerHTML = 'X: ' + e.clientX + '<br>Y: ' + e.clientY;
});