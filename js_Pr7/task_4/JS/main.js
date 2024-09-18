'use strict';
document.body.onclick = function (event) {
    const ball = document.getElementById('ball');
    const x = event.clientX - ball.offsetWidth / 2;
    const y = event.clientY - ball.offsetHeight / 2;
    ball.style.transform = `translate(${x}px, ${y}px)`;
}