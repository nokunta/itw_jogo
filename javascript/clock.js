var totalSeconds = 0;
var pontua  = 500;
setInterval(setTime, 1000);
window.onload = setTime;

function setTime() {

    ++totalSeconds;
    document.getElementById('minutes').innerHTML = pad(totalSeconds % 60);
    pontua--;
    document.getElementById('seconds').innerHTML = pad(parseInt(totalSeconds / 60));
}

function pad(val) {
    'use strict';
    var valString = val + '';
    if (valString.length < 2) {
        return '0' + valString;
        
    }
    else {
        return valString;
    }
}