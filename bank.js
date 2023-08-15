"use strict";
console.clear();
const hangTime = 2000;
const spinTime = 300;
document.documentElement.style.setProperty('--hang-time', hangTime / 1000);
document.documentElement.style.setProperty('--spin-time', spinTime / 2000);
let cards = ['credit-card', 'birthday-card', 'playing-card']; // 'library-card', 'loyality-card', 
let selected = -1;
let getCard = (position) => {
    if (position < 0)
        position = cards.length - 1;
    if (position >= cards.length)
        position = 0;
    return document.querySelector('#' + cards[position]);
};
let nextCard = () => {
    selected++;
    if (selected >= cards.length)
        selected = 0;
    getCard(selected - 1).setAttribute('data-state', 'out');
    getCard(selected).setAttribute('data-state', 'show');
    getCard(selected + 1).setAttribute('data-state', 'in');
};
setInterval(() => nextCard(), hangTime);
nextCard();
