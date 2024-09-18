'use strict';
const cityName = prompt("Введите название города:");
const yearFounded = prompt("Введите год образования города:");
const population = prompt("Введите население города:");

const currentYear = new Date().getFullYear();
const cityAge = currentYear - yearFounded;

alert(`Городу ${cityName} исполнилось ${cityAge} лет с момента его образования. Население - ${population} человек.`);