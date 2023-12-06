import React, { useState, useEffect } from 'react';
import Deck from './Deck'; 

const Game = () => {
  const [playerName, setPlayerName] = useState('TheLegend27');
  const [amtPlayers, setAmtPlayers] = useState(2);
  const [gameStarted, setGameStarted] = useState(false);
  const [players, setPlayers] = useState([]);
  const [gameTurn, setGameTurn] = useState(0);
  const [drawStack, setDrawStack] = useState({
    cardValue: 0,
    stackAmt: 0,
    cardType: 2,
  });

  const [discardPile, setDiscardPile] = useState(new Deck('discardDeckDiv', false));

  useEffect(() => {
    if (gameStarted) {
      play();
    }
  }, [gameTurn, gameStarted]);

  const startGame = () => {
    // Implement your startGame logic here
    setGameStarted(true);
    // You may want to initialize other game-related state or perform other actions
  };

  const callUno = () => {
    setPlayers((prevPlayers) => {
      const updatedPlayers = [...prevPlayers];
      const currentPlayer = updatedPlayers[gameTurn];

      if (currentPlayer.playerDeck.amtCards > 2) {
        currentPlayer.playerDeck.drawCard();
        currentPlayer.playerDeck.drawCard();
      } else {
        currentPlayer.unoCall = true;
      }

      return updatedPlayers;
    });
  };

  const selectWildColor = (color) => {
    // Implement your selectWildColor logic here
  };

  const play = () => {
    if (players[gameTurn].isBot) {
      setTimeout(() => {
        for (let i = 0; i < players.length; i++) {
          document
            .getElementById(players[i].playerDeck.hand.id + 'ID')
            .childNodes[0].classList.remove('activePlayer');
        }
        document
          .getElementById(players[gameTurn].playerDeck.hand.id + 'ID')
          .childNodes[0].classList.add('activePlayer');
        players[gameTurn].botLogic();
      }, 1000);
    } else {
      setTimeout(() => {
        for (let i = 0; i < players.length; i++) {
          document
            .getElementById(players[i].playerDeck.hand.id + 'ID')
            .childNodes[0].classList.remove('activePlayer');
        }
        document
          .getElementById(players[gameTurn].playerDeck.hand.id + 'ID')
          .childNodes[0].classList.add('activePlayer');
      }, 1000);
    }
  };

  return (
    <div>
      {gameStarted ? (
        // Render game components here
        <div>
          <Deck
            divId={discardPile.hand.id}
            hidden={discardPile.isHidden}
            cards={discardPile.cards}
            amtCards={discardPile.amtCards}
            reloadHand={discardPile.reloadHand}
            drawCardAnimation={drawCardAnimation}
            isValid={isValid}
            cardInvalid={cardInvalid}
            play={play}
            discard={discard}
          />
          {/* Include components and logic for the playing field */}
        </div>
      ) : (
        // Render setup form if the game is not started
        <div id="setupGame" className="container">
          <form className="text-center">
            <div className="form-group mt-5">
              <label htmlFor="playerName">
                <h1>Player Name</h1>
              </label>
              <input
                type="text"
                className="form-control form-size"
                id="playerName"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
              />
            </div>
            <div className="form-group mt-5">
              <label htmlFor="amtPlayers">
                <h1>Number of Players</h1>
              </label>
              <select
                className="form-control form-size"
                id="amtPlayers"
                value={amtPlayers}
                onChange={(e) => setAmtPlayers(e.target.value)}
              >
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="form-group mt-5">
              <button
                className="btn btn-primary center-block"
                type="button"
                onClick={startGame}
              >
                <h1>New Game</h1>
              </button>
            </div>
            <div className="form-group mt-5">
              <button
                className="btn btn-primary center-block"
                type="button"
                onClick={() => window.open('rules.html', '_self')}
              >
                <h1>Rules & Info</h1>
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Game;