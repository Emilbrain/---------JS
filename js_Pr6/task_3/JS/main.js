'use strict';

    let numberOfBlocks = prompt("Введите количество блоков:");

    numberOfBlocks = parseInt(numberOfBlocks);

    let container = document.getElementById('container');

    for (let i = 0; i < numberOfBlocks; i++) {
        let block = document.createElement('div');
    block.className = 'block';
    container.appendChild(block);
    }
