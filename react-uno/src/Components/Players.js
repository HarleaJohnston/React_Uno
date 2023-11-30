import {drawACard, drawStack, gameDirection} from "./Deck";
import {gameTurn, players} from "./Game";
/**
 * Player constructor
 * @param {*} deck
 * @param {*} id
 * @param {*} index
 * @param {*} bot
 * @param {*} unoCall
 */
//Potentially move to component?
export function Player(deck, id, index, bot, unoCall) {
	this.isBot = bot;
	this.playerDeck = deck;
	this.playerID = id;
	this.playerIndex = index;
	this.playerUnoCall = unoCall;
	this.botLogic = function () {
		let numBotCards = this.playerDeck.amtCards;

		// bot behavior
		for (let i = 0; i < numBotCards; i++) {
			if (players[gameTurn].playerDeck.isValid(i)) {
				if (players[gameTurn].playerDeck.amtCards == 2) {
					players[gameTurn].unoCall = true;
				}
				players[gameTurn].playerDeck.playCard(i);
				return;
			}
		}

		if (drawStack.stackAmt != 0) {
			drawACard();
		} else {
			// draw a card and check if it is a match. Will break loop if hits 20 card limit (prevents infinite decks)
			while (!this.playerDeck.playCard(this.playerDeck.amtCards - 1)) {
				drawACard();
			}
		}
	};
}

/**
 * End current player's turn and begin next player's turn
 */
export function rotatePlayers() {
	gameTurn = gameTurn + gameDirection;

	if (gameTurn == players.length) {
		gameTurn = 0;
	} else if (gameTurn < 0) {
		gameTurn = players.length - 1;
	}
}

export function play(players, gameTurn) {
	if (players[gameTurn].isBot) {
		setTimeout(function () {
			for (let i = 0; i < players.length; i++) {
				document
					.getElementById(players[i].playerDeck.hand.id + "ID")
					.childNodes[0].classList.remove("activePlayer");
			}
			document
				.getElementById(players[gameTurn].playerDeck.hand.id + "ID")
				.childNodes[0].classList.add("activePlayer");
			players[gameTurn].botLogic();
		}, 1000);
	} else {
		setTimeout(function () {
			for (let i = 0; i < players.length; i++) {
				document
					.getElementById(players[i].playerDeck.hand.id + "ID")
					.childNodes[0].classList.remove("activePlayer");
			}
			document
				.getElementById(players[gameTurn].playerDeck.hand.id + "ID")
				.childNodes[0].classList.add("activePlayer");
		}, 1000);
	}
}
