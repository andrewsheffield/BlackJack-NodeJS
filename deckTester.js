var Deck = require('./Deck');

var first = new Deck(1);

first.shuffleDeck();

//first.printDeck();

for (i=0; i<=52; i++) {
	var drawnCard = first.drawCard();
	drawnCard.printCard();
}
