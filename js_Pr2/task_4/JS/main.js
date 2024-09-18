'use strict';
const firstNumber = parseFloat(prompt("Введите первое число:"));
const secondNumber = parseFloat(prompt("Введите второе число:"));

const sum = firstNumber + secondNumber;
const difference = firstNumber - secondNumber;
const product = firstNumber * secondNumber;
const quotient = secondNumber !== 0 ? firstNumber / secondNumber : "На ноль делить нельзя";

alert(`Сумма: ${sum}\nРазность: ${difference}\nПроизведение: ${product}\nЧастное: ${quotient}`);