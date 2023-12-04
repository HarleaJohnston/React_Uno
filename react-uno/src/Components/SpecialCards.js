import Game from "./Game";
import {Players} from "./Players";
import $ from 'jquery';

/**
 * Reverse the direction of player rotation
 */
//Change out any document.getElementById to the react way
export function cardReverse(players, gameDirection) {
	if (players.length === 2) {
		Players.rotatePlayers();
	} else {
		gameDirection = -1 * gameDirection;
	}
}

/**
 * Skip the next player in rotation
 */
export function cardSkip() {
	Players.rotatePlayers();
}

export function cardWild(players, gameTurn, discardPile) {
	if (players[gameTurn].isBot) {
		let colorArray = ["Red", "Green", "Blue", "Yellow"];
		let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
		discardPile.cards[discardPile.cards.length - 1].color = randColor;
		let colorChoice = convertColorToHex(randColor);
		$(".chosen-wild-card-color .inner").css("background", colorChoice);
	} else {
		document.getElementById("overlay").style.display = "block";
	}
	return true;
}

export function selectWildColor(color, discardPile, isColorSelected) {
	discardPile.cards[discardPile.cards.length - 1].color = color;
	$(".chosen-wild-card-color .inner").css(
		"background",
		convertColorToHex(color)
	);
	isColorSelected = true;
	Players.rotatePlayers();
	Game.play();
	document.getElementById("overlay").style.display = "none";
}

export function cardDraw2(drawStack) {
	drawStack.stackAmt++;
	drawStack.cardType = 2;
	drawStack.cardValue = 10;
	drawStack.updateStack();
}

export function cardDraw4(drawStack) {
	drawStack.stackAmt++;
	drawStack.cardType = 4;
	drawStack.cardValue = 1;
	drawStack.updateStack();
	cardWild();
}

export function convertColorToHex(color) {
	switch (color) {
		case "Red":
			return "#c72a18";
		case "Green":
			return "#18a849";
		case "Blue":
			return "#0063b3";
		case "Yellow":
			return "#e6ca1e";
	}
}
