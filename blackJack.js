var Deck = require('./Deck');

var deck = new Deck();

var playerCards = [];
var computerCards = [];

var playerScore = 0;
var computerScore = 0;

startGame();

function startGame() {

	deck = new Deck();

	playerCards = [];
	computerCards = [];

	playerScore = 0;
	computerScore = 0;

	console.log("\n#############Welcome to BlackJack, Sheff Edition###############\n")

	dealCards("init");
};

function dealCards(type) {
	if (type == "init") {
		playerCards.push(deck.drawCard());
		computerCards.push(deck.drawCard());
		playerCards.push(deck.drawCard());
		computerCards.push(deck.drawCard());
	}
	else if (type == "playerHit") {
		playerCards.push(deck.drawCard());
		console.log("\nYou drew a");
		playerCards[playerCards.length -1].printCard();
		console.log("");
	}

	calcPlayerScore()
}

function calcPlayerScore() {

	playerScore = 0;

	for (i=0; i<playerCards.length; i++) {

		if (playerCards[i].getNumber() <= 10) {
			playerScore += playerCards[i].getNumber();
		}
		else if (playerCards[i].getNumber() == 13) {
			playerScore += 11;
		}
		else {
			playerScore += 10;
		}
	}

	checkPlayerScores();
}

function checkPlayerScores() {
	if (playerScore == 21) {
		endGame("blackJack");
	}
	if (playerScore > 21) {
		endGame("playerBusts");
	}
	else {
		hitOrStay();
	}
}

function hitOrStay() {

	var answer = "";

	console.log("You currently hold:");
	for (i=0; i<playerCards.length; i++) {
		playerCards[i].printCard();
	}
	console.log(playerScore);
	console.log("Computer is showing:");
	computerCards[1].printCard();

	console.log("Would you like to hit or stay?");

	process.stdin.resume();
	process.stdin.setEncoding('utf8');
	 
	process.stdin.on('data', function (chunk) {
		process.stdout.write('data: ' + chunk);
		chunk = chunk.toString().trim();
		chunk.replace(/\n$/, '');

		if (chunk == "h") {
			dealCards("playerHit");
		}
		else if (chunk == "s") {
			console.log("coming soon");
		}
		else {
			console.log("\nThat is not an acceptable answer.\n\n");
			hitOrStay();
		}
	});

}

function endGame(result) {
	if (result == "blackJack") {
		console.log("Black Jack!");
		startGame();
	}
	else if (result == "playerBusts") {
		console.log("You Bust!");
		startGame();
	}
}