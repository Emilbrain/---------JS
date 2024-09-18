'use strict';
    document.getElementById('clickButton').onclick = function() {
        alert('Кнопка нажата!');
    };

document.getElementById('hoverButton').onmouseover = function () {
    alert('Вы навели на кнопку!');
};

document.getElementById('dblClickButton').ondblclick = function () {
    alert('Кнопка дважды нажата!');
};