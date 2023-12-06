import Global from "./GlobalVars";

export function Card(color, value) {
  this.color = color;
  this.value = value;
  this.getColorValue = function () {
    switch (this.color) {
      case 'Red':
        return '#A60000';
      case 'Blue':
        return '#0000FF';
      case 'Green':
        return '#004f19';
      case 'Yellow':
        return '#e5bf00';
      default:
        return '#333333';
    }
  };
}

export function drawSpecificCard(players, gameTurn, cardColor, cardValue) {
  players[gameTurn].playerDeck.drawSpecificCard(cardColor, cardValue);
}

export function removeManyCards(players, gameTurn, numberOfCards) {
  if (numberOfCards > players[gameTurn].playerDeck.amtCards - 2) {
    return;
  }

  for (let i = 0; i < numberOfCards; i++) {
    players[gameTurn].playerDeck.removeCard(0);
  }
  players[gameTurn].playerDeck.reloadHand();
}

export function drawACard(
  players,
  drawStack,
  gameTurn,
  rotatePlayers,
  play,
  forcePlay
) {
  if (drawStack.stackAmt !== 0) {
    let drawTimes = drawStack.cardType * drawStack.stackAmt;
    drawStack.clearVisual();
    for (let i = 0; i < drawTimes; i++) {
      players[gameTurn].playerDeck.drawCard();
    }

    drawStack.stackAmt = 0;
    rotatePlayers();
    play(players, gameTurn);
  } else if (forcePlay(players, gameTurn)) {
    let audio = new Audio('error.mp3');

    // audio.play();
  } else {
    players[gameTurn].playerDeck.drawCard();
  }
}

export function selectPlayfieldCard(discards, Card) {
  let colorArray = ['Red', 'Green', 'Blue', 'Yellow'];
  let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
  let randValue = Math.floor(Math.random() * 10);
  let tempCard = new Card(randColor, randValue);

  discard(tempCard);
}

export function discard(card, discardPile) {
  Global.discardPile .addCard(card);
  if (Global.discardPile .cards.length > 5) discardPile.removeCard(0);
}

export function forcePlay(players, gameTurn) {
  for (let i = 0; i < players[gameTurn].playerDeck.cards.length; i++) {
    if (players[gameTurn].playerDeck.isValid(i)) return true;
  }
  return false;
}