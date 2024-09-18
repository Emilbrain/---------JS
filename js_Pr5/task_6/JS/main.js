'use strict';
function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let averageAge = getAverageAge(users);
console.log(averageAge);