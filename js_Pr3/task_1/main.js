'use strict';
const priceInput = prompt("Введите стоимость товара:");
const moneyInput = prompt("Введите количество денег клиента:");

// Преобразуем введенные значения в числа
const price = parseFloat(priceInput);
const money = parseFloat(moneyInput);

// Проверяем, являются ли введенные значения числами и не отрицательными
if (isNaN(price) || isNaN(money) || price < 0 || money < 0) {
    alert("Неверный формат ввода. Пожалуйста, введите положительные числа.");
} else {
    // Сравниваем стоимость товара и количество денег клиента
    if (price === money) {
        alert("Покупка совершена");
    } else if (price > money) {
        const deficit = price - money;
        alert(`Для покупки не хватает ${deficit} р.`);
    } else {
        const change = money - price;
        alert(`Покупка совершена. Сдача ${change} р.`);
    }
}