import React, { useState, useEffect } from 'react';
function drawACard(){
  return "doing this to get rid of the error"
}

function Player({ deck, id, index, isBot, unoCall }) {
  const [playerDeck, setPlayerDeck] = useState(deck);

  const botLogic = () => {
    let numBotCards = playerDeck.amtCards;

    // Bot behavior
    for (let i = 0; i < numBotCards; i++) {
      if (playerDeck.isValid(i)) {
        if (playerDeck.amtCards === 2) {
          unoCall(true);
        }
        playerDeck.playCard(i);
        setPlayerDeck({ ...playerDeck });
        return;
      }
    }

    // Draw a card if the draw stack is not empty
    if (drawStack.stackAmt !== 0) {
      drawACard();
    } else {
      while (!playerDeck.playCard(playerDeck.amtCards - 1)) {
        drawACard();
      }
    }
  };

	// Assuming these are global variables
	let gameTurn = 0;
	let gameDirection = 1;
	let drawStack = { stackAmt: 0 };

	function rotatePlayers(players) {
	gameTurn = gameTurn + gameDirection;

	if (gameTurn === players.length) {
		gameTurn = 0;
	} else if (gameTurn < 0) {
		gameTurn = players.length - 1;
	}
	}

}