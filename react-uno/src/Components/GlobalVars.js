import { Deck } from "./Deck";

const GlobalVars = () => {};

export default GlobalVars;

GlobalVars.players = [];
GlobalVars.playerName = "TheLegend27";
GlobalVars.playerAmount = 2;
GlobalVars.initialCards = 7;
GlobalVars.gameTurn = 0;
GlobalVars.gameDirection = 1;
GlobalVars.isInitialDraw = true;
GlobalVars.discardPile = new Deck("discardDeckDiv", false);
GlobalVars.drawStack = {
	cardValue: 0,
	stackAmt: 0,
	cardType: 2, // either 2 or 4
	updateStack: function () {
		document.getElementById("drawCardPile").innerHTML =
			"+" + this.cardType * this.stackAmt;
	},
	clearVisual: function () {
		document.getElementById("drawCardPile").innerHTML = "";
	},
};
