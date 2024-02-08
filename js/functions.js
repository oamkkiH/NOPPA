'use strict';

let rand_num1 = 0;

const getRandomIntRange = (min, max) => {
    return Math.floor(Math.random() * max) + min;
};

const diceNumber = () => {
    rand_num1 = getRandomIntRange(1, 6);
    document.querySelector('#dice').innerHTML = `<img src="./img/${rand_num1}.png" />`;
};

addEventListener("DOMContentLoaded", () => {
    diceNumber();
});
