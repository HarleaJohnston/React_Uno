import React, { useState } from 'react';
import { drawACard, drawStack, gameDirection } from './Deck';
import { gameTurn, players, rotatePlayers } from './Game';

export function Players() {
  const [gameState, setGameState] = useState({
    players,
    gameTurn,
    drawStack,
  });

  const handleBotLogic = () => {
    let numBotCards = gameState.players[gameState.gameTurn].playerDeck.amtCards;

    for (let i = 0; i < numBotCards; i++) {
      if (gameState.players[gameState.gameTurn].playerDeck.isValid(i)) {
        if (gameState.players[gameState.gameTurn].playerDeck.amtCards === 2) {
          gameState.players[gameState.gameTurn].unoCall = true;
        }
        gameState.players[gameState.gameTurn].playerDeck.playCard(i);
        setGameState((prev) => ({ ...prev }));
        return;
      }
    }

    if (gameState.drawStack.stackAmt !== 0) {
      drawACard();
    } else {
      while (
        !gameState.players[gameState.gameTurn].playerDeck.playCard(
          gameState.players[gameState.gameTurn].playerDeck.amtCards - 1
        )
      ) {
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
