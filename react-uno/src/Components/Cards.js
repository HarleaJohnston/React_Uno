/**
 * card constructor
 * @param {*} color
 * @param {*} value
 */
//Change out any document.getElementById to the react way
export function Card(color, value) {
	this.color = color;
	this.value = value;
	this.getColorValue = function () {
		switch (this.color) {
			case "Red":
				return "#A60000";
			case "Blue":
				return "#0000FF";
			case "Green":
				return "#004f19";
			case "Yellow":
				return "#e5bf00";
			default:
				return "#333333";
		}
	};
}

/**
 * Function draws a specific card for cheat
 */
export function drawSpecificCard(players, cardColor, cardValue) {
	players[gameTurn].playerDeck.drawSpecificCard(cardColor, cardValue);
}

/**
 * Function draws a specific card for cheat code
 */
export function removeManyCards(players, gameTurn, numberOfCards) {
	if (numberOfCards > players[gameTurn].playerDeck.amtCards - 2) {
		return;
	}

	for (let i = 0; i < numberOfCards; i++) {
		players[gameTurn].playerDeck.removeCard(0);
	}
	players[gameTurn].playerDeck.reloadHand();
}

/**
 * Function draws cards and adds them to playerhand
 */
export function drawACard() {
	if (drawStack.stackAmt != 0) {
		let drawTimes = drawStack.cardType * drawStack.stackAmt;
		drawStack.clearVisual();
		for (let i = 0; i < drawTimes; i++) {
			players[gameTurn].playerDeck.drawCard();
		}

		drawStack.stackAmt = 0;
		rotatePlayers();
		play();
	} else if (forcePlay()) {
		let audio = new Audio("error.mp3");

		audio.play();
	} else {
		players[gameTurn].playerDeck.drawCard();
	}
}

/**
 * Changes the global card object to random color/value assignment
 */
export function selectPlayfieldCard() {
	let colorArray = ["Red", "Green", "Blue", "Yellow"];
	let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
	let randValue = Math.floor(Math.random() * 10);
	let tempCard = new Card(randColor, randValue);

	discard(tempCard);
}

export function discard(card) {
	discardPile.addCard(card);
	if (discardPile.cards.length > 5) discardPile.removeCard(0);
}

export function forcePlay() {
	for (let i = 0; i < players[gameTurn].playerDeck.cards.length; i++) {
		if (players[gameTurn].playerDeck.isValid(i)) return true;
	}
	return false;
}
