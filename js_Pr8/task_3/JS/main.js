'use strict';
const block = document.getElementById('movableBlock');
let posX = 0;
let posY = 0;

document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case 'w':
        case 'W':
            posY -= 1; // перемещение вверх
            break;
        case 's':
        case 'S':
            posY += 1; // перемещение вниз
            break;
        case 'a':
        case 'A':
            posX -= 1; // перемещение налево
            break;
        case 'd':
        case 'D':
            posX += 1; // перемещение направо
            break;
    }
    block.style.transform = `translate(${posX}px, ${posY}px)`; // обновление позиции блока
});