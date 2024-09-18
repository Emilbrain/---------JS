'use strict';
const lastName = prompt("Введите вашу Фамилию:");
const firstName = prompt("Введите ваше Имя:");
const middleName = prompt("Введите ваше Отчество:");

console.log(lastName);
console.log(firstName);
console.log(middleName);

const isTrue = confirm(`Верно ли ваше ФИО: ${lastName} ${firstName} ${middleName}?`);
console.log(isTrue);