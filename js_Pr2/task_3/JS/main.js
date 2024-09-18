'use strict';
const radius = prompt("Введите радиус круга:");
const r = parseFloat(radius);
const area = Math.PI * r * r;

alert(`Площадь круга с радиусом ${r} равна ${area.toFixed(2)}.`);