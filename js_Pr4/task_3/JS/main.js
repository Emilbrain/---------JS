'use strict';
let number;

while (true) {
    number = prompt("Введите число больше 10:");

    if (number === null || number === '') {
        alert("Отменено");
        break;
    }

    number = Number(number);

    if (number > 10) {
        alert("Спасибо! Вы ввели число: " + number);
        break;
    } else {
        alert("Пожалуйста, введите число больше 10.");
    }
}