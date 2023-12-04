import React, { useState } from 'react';
import { Deck } from './Deck';
import { Game } from './Game';

const drawStack = Deck.drawStack;
const drawACard = Deck.drawACard;
const players = Game.players;
const gameTurn = Game.gameTurn;

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
