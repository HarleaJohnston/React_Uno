import { Deck } from "./Deck";

const GlobalVars = {
  players: [],
  playerName: "TheLegend27",
  playerAmount: 4,
  initialCards: 7,
  gameTurn: 0,
  gameDirection: 1,
  isInitialDraw: true,
  discardPile: new Deck("discardDeckDiv", false),
  drawStack: {
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
  },
};

export default GlobalVars;
