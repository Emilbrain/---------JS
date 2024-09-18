'use strict';
function extractCurrencyValue(str) {
    return parseFloat(str.slice(1));
}

let cost = "$120";
let value = extractCurrencyValue(cost);
console.log(value); 