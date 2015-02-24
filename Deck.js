var Card = require('./Card');

function Deck() {
	this.deck = [];
	populateDeck(this.deck);
	shuffle(this.deck);
}

function populateDeck(deck) {
	for (i=0; i<13; i++) {
		deck[i] = new Card(i+1, "Spade");
	}

	for (i=13; i<26; i++) {
		deck[i] = new Card(i-12, "Heart");
	}

	for (i=26; i<39; i++) {
		deck[i] = new Card(i-25, "Club");
	}

	for (i=39; i<52; i++) {
		deck[i] = new Card(i-38, "Diamond");
	}

	return deck;
}

function shuffle(array) {
  var currentIndex = array.length
    , temporaryValue
    , randomIndex
    ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

Deck.prototype.printDeck = function () {
	for (i=0; i<52; i++) {
		this.deck[i].printCard();
	}
}

Deck.prototype.shuffleDeck = function() {
	populateDeck(this.deck);
	return shuffle(this.deck);
}

Deck.prototype.drawCard = function() {
	if (this.deck.length == 0) {
		throw new Error('There are no more cards to draw');
		process.exit(1);
	}
	else
		return this.deck.shift();
}

module.exports = Deck;