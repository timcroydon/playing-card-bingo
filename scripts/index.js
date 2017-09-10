// TODO: initialise array
// TODO: shuffle array
// TODO: populate array

var SUITS = ['hearts', 'clubs', 'diamonds', 'spades']
var VALUES = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king']

var deck = Array.from(Array(52).keys())

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

var shuffled = shuffle(deck)

shuffled = shuffled.map(function (card) {
    var suit = SUITS[Math.floor(card / 13)]
    var face = VALUES[card % 13]

    return face + '_of_' + suit + '.svg'
})

vm = {
    cards: shuffled.slice(0, 9)
}

ko.applyBindings(vm)