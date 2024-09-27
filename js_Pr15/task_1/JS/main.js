'use strict';

let intervalId;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('startButton').addEventListener('click', function () {
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.getElementById('colorBlock').style.backgroundColor = getRandomColor();
        }, 500);
    }
});

document.getElementById('stopButton').addEventListener('click', function () {
    clearInterval(intervalId);
    intervalId = null;
});