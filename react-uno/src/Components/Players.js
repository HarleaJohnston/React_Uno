import React, { useState, useEffect } from 'react';
import { drawACard } from './Deck';

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

    setGameState((prev) => ({ ...prev }));
  };

  const handleRotatePlayers = () => {
    rotatePlayers();
    setGameState((prev) => ({
      ...prev,
      gameTurn,
    }));
  };

}

// not originally here from index.js(game.js)
/* export function play(players, gameTurn) {
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
} */ 
