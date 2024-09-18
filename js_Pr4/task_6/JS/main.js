'use strict';
let checkAge = (age) => (age >= 18) || confirm('Родители разрешили?');

let age = prompt("Ваш возраст"); 
let result = checkAge(age);
console.log(result); 