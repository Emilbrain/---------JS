'use strict';
function printEvenNumbers() {
    let a = parseInt(prompt("Введите значение a:"));
    let b = parseInt(prompt("Введите значение b:"));

    if (a > b) {
        alert("Значение a должно быть меньше или равно значению b.");
        return;
    }

    let evenNumbers = [];

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
        }
    }

    alert("Четные числа от " + a + " до " + b + ": " + evenNumbers.join(", "));
}

printEvenNumbers();