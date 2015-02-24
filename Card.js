
function Card(n, s) {
	this.number = n;
	this.suit = s;
};

Card.prototype.getNumber = function() {
	return this.number;
};

Card.prototype.getSuit = function() {
	return this.suit;
}

Card.prototype.printCard = function() {
	console.log(this.number + " of " + this.suit + "s.");
};

module.exports = Card;