// note to self: dom content loaded is used as soon at the html page is loaded, you can add delays to wait for other elements to load but in this case it isnt needed

document.addEventListener('DOMContentLoaded', function () {

    const buttonRollDice = document.querySelector('.dice-roll'); // use query selector instead of getElementBy - newer version 

    function rollDice() {

        const diceSide1 = document.getElementById('dice-side-1');
        const diceSide2 = document.getElementById('dice-side-2');
        const status = document.getElementById('status');

        const side1 = Math.floor(Math.random() * 6) + 1;
        const side2 = Math.floor(Math.random() * 6) + 1;
        const diceTotal = side1 + side2;

        diceSide1.innerHTML = side1; //innerHTML changes the HTML content within the tag - was explained better on Youtube video
        diceSide2.innerHTML = side2;

        status.innerHTML = 'You rolled ' + diceTotal + '.';
    }

    buttonRollDice.addEventListener('click', rollDice, false);

}, false);