import React, { useState, useEffect } from 'react';
import Card from './Card'; // Adjust the import path based on your project structure
import {
  drawACard,
  selectPlayfieldCard,
  discard,
  forcePlay,
  removeManyCards,
} from './CardFunctions'; // Adjust the import path based on your project structure

const Deck = ({ divId, hidden, initialDraw, drawCardAnimation, players, gameTurn }) => {
  const [cards, setCards] = useState([]);
  const [amtCards, setAmtCards] = useState(0);

  useEffect(() => {
    // Cleanup logic, if needed
    return () => {
      // Cleanup logic, if needed
    };
  }, [cards, amtCards]);

  const addCard = (card) => {
    setCards([...cards, card]);
    setAmtCards(cards.length + 1);
  };

  const drawCard = () => {
    let colorArray = ['Red', 'Green', 'Blue', 'Yellow', 'Special'];
    let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    let randValue = Math.floor(Math.random() * 13);
    if (randColor === 'Special') {
      let randNum = Math.round(Math.random() * 2 + 1);
      if (randNum === 1 || randNum === 2) {
        randValue = randValue % 2 === 0 ? 13 : 14;
      } else {
        randColor = colorArray[Math.floor(Math.random() * (colorArray.length - 1))];
        randValue = Math.floor(Math.random() * 13);
      }
    }
    let tempCard = { color: randColor, value: randValue };
    addCard(tempCard);

    if (!initialDraw) {
      drawCardAnimation(divId, randValue, randColor);
    } else {
      reloadHand();
    }

    // If drawing a card, player cannot have Uno
    players[gameTurn].unoCall = false;
  };

  const playCard = (card) => {
    let wildColorMenuIsInactive = true;
    if (isValid(card)) {
      if (players[gameTurn].playerDeck.amtCards === 2 && !players[gameTurn].unoCall) {
        document.getElementById('unoButton').classList.add('unoButton');
        setTimeout(() => {
          document.getElementById('unoButton').classList.remove('unoButton');
        }, 500);
        players[gameTurn].playerDeck.drawCard();
        players[gameTurn].playerDeck.drawCard();
      }

      let cardBeingPlayed = cards[card];

      discard(cardBeingPlayed);
      // Assuming discardPile is accessible
      discardPile.reloadHand();

      switch (cardBeingPlayed.value) {
        case 10:
          cardDraw2();
          break;
        case 11:
          cardReverse();
          break;
        case 12:
          cardSkip();
          break;
        case 13:
          cardWild();
          if (!players[gameTurn].isBot) {
            wildColorMenuIsInactive = false;
          }
          break;
        case 14:
          cardDraw4();
          if (!players[gameTurn].isBot) {
            wildColorMenuIsInactive = false;
          }
          break;
      }

      removeCard(card);
      if (cards.length === 0) {
        alert(players[gameTurn].playerID + ' wins!');
        // Instead of location.reload(), consider updating state to trigger a component re-render
        // location.reload();
        // return;
      }
    } else if (!players[gameTurn].isBot) {
      cardInvalid(card);
      return false;
    } else {
      return false;
    }

    reloadHand();
    if (wildColorMenuIsInactive) {
      rotatePlayers();
      play();
    }
    return true;
  };

  const getCard = (card) => {
    return cards[card];
  };

  const reloadHand = () => {
    const handElement = document.getElementById('handRef');

    handElement.innerHTML = '';
    for (let i = 0; i < amtCards; i++) {
      let cardDiv = document.createElement('div');
      handElement.append(cardDiv);
      cardDiv.classList.add('card');

      let cardSpan = document.createElement('span');
      cardDiv.append(cardSpan);
      cardSpan.classList.add('inner');

      let cardSpanInner = document.createElement('span');
      cardSpan.append(cardSpanInner);
      cardSpanInner.classList.add('mark');

      cardDiv.append();

      if (!hidden) {
        // Assuming addCSSDesignToCard is available
        addCSSDesignToCard(cardDiv, cardSpanInner, getCard(i).value);

        if (divId !== 'discardDeckDiv') {
          cardDiv.classList.add('my-card');
        }
        if (divId === 'discardDeckDiv') {
          if (i === discardPile.cards.length - 1) {
            if (cardDiv.classList.contains('wild') || cardDiv.classList.contains('plus-4')) {
              cardDiv.classList.add('chosen-wild-card-color');
            }
          }
        }

        switch (getCard(i).getColorValue()) {
          case '#0000FF':
            cardDiv.classList.add('blue');
            break;
          case '#A60000':
            cardDiv.classList.add('red');
            break;
          case '#004f19':
            cardDiv.classList.add('green');
            break;
          case '#e5bf00':
            cardDiv.classList.add('yellow');
            break;
          default:
            cardDiv.classList.add('black');
        }
      } else {
        // Assuming addCSSDesignToBackOfCard is available
        addCSSDesignToBackOfCard(cardDiv, cardSpanInner);
        if (i >= 7) {
          cardDiv.style.display = 'none';
        }
      }
    }
  };

  const isValid = (card) => {
    let cardColor = cards[card].color;
    let cardNumber = cards[card].value;

    if (drawStack.stackAmt !== 0) {
      if (cardNumber !== drawStack.cardValue) {
        return false;
      } else if (cardNumber === 1 && cardColor !== 'Special') {
        return false;
      } else {
        return true;
      }
    }

    if (
      cardColor === discardPile.cards[discardPile.cards.length - 1].color ||
      cardColor === 'Special'
    ) {
      return true;
    }
    if (cardNumber === discardPile.cards[discardPile.cards.length - 1].value) {
      return true;
    }
    return false;
  };

  const cardInvalid = (card) => {
    let audio = new Audio('error.mp3');
    if (!players[gameTurn].isBot) audio.play();
    let handElement = document.getElementById('handRef');
    handElement.childNodes[card].classList.add('invalid');
    setTimeout(function () {
      handElement.childNodes[card].classList.remove('invalid');
    }, 500);
  };

  const handleDrawCard = () => {
    drawACard(players, drawStack, gameTurn, rotatePlayers, play, forcePlay);
  };

  const handleSelectPlayfieldCard = () => {
    selectPlayfieldCard(handleDiscard, Card); // Assuming Card is a prop or part of the Deck component
  };

  const handleDiscard = (card) => {
    discard(card, discardPile);
    // ... (other logic after discarding a card)
  };

  const handleForcePlay = () => {
    if (forcePlay(players, gameTurn)) {
      // ... (handle force play logic, e.g., display an error)
    }
  };

  const handleRemoveManyCards = (numberOfCards) => {
    removeManyCards(players, gameTurn, numberOfCards);
  };

  return (
    <div id={divId}>
      {cards.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      {/* Add buttons to trigger the functions */}
      <button onClick={handleDrawCard}>Draw Card</button>
      <button onClick={handleSelectPlayfieldCard}>Select Playfield Card</button>
      {/* ... (other buttons and components) */}
    </div>
  );
};

export default Deck;