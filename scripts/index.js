var SUITS = ['hearts', 'clubs', 'diamonds', 'spades']
var VALUES = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']

// fischer-yates shuffle shamelessly lifted from https://bost.ocks.org/mike/shuffle/
function shuffle(array) {
    var copy = [],
        n = array.length,
        i;

    // While there remain elements to shuffle…
    while (n) {

        // Pick a remaining element…
        i = Math.floor(Math.random() * array.length);

        // If not already shuffled, move it to the new array.
        if (i in array) {
            copy.push(array[i]);
            delete array[i];
            n--;
        }
    }

    return copy;
}

// initialise an array [0, 1, 2, ... , 50, 51] (no jokers)
var deck = Array.from(Array(52).keys())

var shuffled = shuffle(deck)

// map shuffled array of numbers to corresponding card names (e.g. 2_of_hearts.svg)
shuffled = shuffled.map(function (card) {
    var suit = SUITS[Math.floor(card / 13)]
    var face = card % 13

    filename = VALUES[face] + '_of_' + suit

    // TODO: make picture cards optional
    if (face >= 10) {
        filename += '2' // 2 implies proper face cards
    }

    return filename + '.svg'
})

vm = {
    // TODO: make number of card configurable
    // take first 9 cards
    cards: shuffled.slice(0, 9)
}

ko.applyBindings(vm)
