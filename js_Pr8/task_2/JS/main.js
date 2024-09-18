'use strict'
const originalColor = getComputedStyle(document.body).backgroundColor;

document.getElementById('rButton').onmousedown = function () {
    document.body.style.backgroundColor = 'red';
};
document.getElementById('rButton').onmouseup = function () {
    document.body.style.backgroundColor = originalColor;
};

document.getElementById('gButton').onmousedown = function () {
    document.body.style.backgroundColor = 'green';
};
document.getElementById('gButton').onmouseup = function () {
    document.body.style.backgroundColor = originalColor;
};

document.getElementById('bButton').onmousedown = function () {
    document.body.style.backgroundColor = 'blue';
};
document.getElementById('bButton').onmouseup = function () {
    document.body.style.backgroundColor = originalColor;
};