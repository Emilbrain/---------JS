'use strict';
document.getElementById('toggleButton').onclick = function () {
    const textDiv = document.getElementById('text');
    if (textDiv.style.display === 'none') {
        textDiv.style.display = 'block'; 
    } else {
        textDiv.style.display = 'none'; 
    }
};