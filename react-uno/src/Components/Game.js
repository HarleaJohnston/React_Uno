import React from 'react'
import $ from 'jquery'

const Game = () => {
	// add css to cards.js
	/**
 * Adds classes to create the CSS design for the back of the Uno cards
 * @param {*} cardDiv
 * @param {*} cardSpanInner
 */
function addCSSDesignToBackOfCard(cardDiv, cardSpanInner) {
    cardDiv.classList.add("black");
    cardSpanInner.append("_");
    $(cardSpanInner).css("color", "#c72a18");
    $(cardSpanInner).css("background-color", "#c72a18");
    $(cardSpanInner).css("text-shadow", "#c72a18 1px 1px 1px");
}

/**
 * Adds classes to create the CSS design for the front of the Uno cards
 * @param {*} cardDiv 
 * @param {*} cardSpanInner 
 * @param {*} cardValue 
 */
function addCSSDesignToCard(cardDiv, cardSpanInner, cardValue) {
    switch (cardValue) {
        case 0:
            cardDiv.classList.add("num-0");
            cardSpanInner.append("0");
            break;
        case 1:
            cardDiv.classList.add("num-1");
            cardSpanInner.append("1");
            break;
        case 2:
            cardDiv.classList.add("num-2");
            cardSpanInner.append("2");
            break;
        case 3:
            cardDiv.classList.add("num-3");
            cardSpanInner.append("3");
            break;
        case 4:
            cardDiv.classList.add("num-4");
            cardSpanInner.append("4");
            break;
        case 5:
            cardDiv.classList.add("num-5");
            cardSpanInner.append("5");
            break;
        case 6:
            cardDiv.classList.add("num-6");
            cardSpanInner.append("6");
            break;
        case 7:
            cardDiv.classList.add("num-7");
            cardSpanInner.append("7");
            break;
        case 8:
            cardDiv.classList.add("num-8");
            cardSpanInner.append("8");
            break;
        case 9:
            cardDiv.classList.add("num-9");
            cardSpanInner.append("9");
            break;
        case 10:
            cardDiv.classList.add("draw2");
            cardSpanInner.append("_");
            $(cardSpanInner).css("color", "white");
            $(cardSpanInner).css("text-shadow", "#fff 1px 1px 1px");

            // first inner card drawing
            let specialClassDiv = document.createElement("div");
            cardSpanInner.append(specialClassDiv);
            specialClassDiv.classList.add("cardsInInnerPlus2");
            specialClassDiv.classList.add("card-plus2-bottom-left");

            let evenInnerSpan = document.createElement("span");
            specialClassDiv.append(evenInnerSpan);
            evenInnerSpan.classList.add("inner");

            // second inner card drawing
            let specialClassDiv2 = document.createElement("div");
            cardSpanInner.append(specialClassDiv2);
            specialClassDiv2.classList.add("cardsInInnerPlus2");
            specialClassDiv2.classList.add("card-plus2-top-right");

            let evenInnerSpan2 = document.createElement("span");
            specialClassDiv2.append(evenInnerSpan2);
            evenInnerSpan2.classList.add("inner");

            break;
        case 11:
            cardDiv.classList.add("reverse");
            cardSpanInner.append("⇄");
            break;
        case 12:
            cardDiv.classList.add("skip");
            cardSpanInner.append("⊘");
            break;
        case 13:
            cardDiv.classList.add("wild");
            cardDiv.classList.add("black");
            cardSpanInner.append("_");
            $(cardSpanInner).css("color", "white");
            $(cardSpanInner).css("text-shadow", "#fff 1px 1px 1px");

            // div circle container
            let specialClassDiv9 = document.createElement("div");
            cardSpanInner.append(specialClassDiv9);
            specialClassDiv9.classList.add("circle-container");

            // stuff in container
            let yinnerSpecialClassDiv1 = document.createElement("div");
            specialClassDiv9.append(yinnerSpecialClassDiv1);
            yinnerSpecialClassDiv1.classList.add("quarter");
            yinnerSpecialClassDiv1.classList.add("top-left");

            let yinnerSpecialClassDiv2 = document.createElement("div");
            specialClassDiv9.append(yinnerSpecialClassDiv2);
            yinnerSpecialClassDiv2.classList.add("quarter");
            yinnerSpecialClassDiv2.classList.add("top-right");

            let yinnerSpecialClassDiv3 = document.createElement("div");
            specialClassDiv9.append(yinnerSpecialClassDiv3);
            yinnerSpecialClassDiv3.classList.add("quarter");
            yinnerSpecialClassDiv3.classList.add("bottom-left");

            let yinnerSpecialClassDiv4 = document.createElement("div");
            specialClassDiv9.append(yinnerSpecialClassDiv4);
            yinnerSpecialClassDiv4.classList.add("quarter");
            yinnerSpecialClassDiv4.classList.add("bottom-right");

            // span inner
            let zabevenInnerSpan = document.createElement("span");
            specialClassDiv9.append(zabevenInnerSpan);
            zabevenInnerSpan.classList.add("inner");
            break;
        case 14:
            cardDiv.classList.add("plus-4");
            cardDiv.classList.add("black");
            cardSpanInner.append("_");
            $(cardSpanInner).css("color", "white");
            $(cardSpanInner).css("text-shadow", "#fff 1px 1px 1px");

            // div card green
            let specialClassDiv19 = document.createElement("div");
            cardSpanInner.append(specialClassDiv19);
            specialClassDiv19.classList.add("cardsInInnerPlus4");
            specialClassDiv19.classList.add("card-plus4-green");
            specialClassDiv19.classList.add("green");

            let evenInnerSpan1 = document.createElement("span");
            specialClassDiv19.append(evenInnerSpan1);
            evenInnerSpan1.classList.add("inner");

            // div card blue
            let specialClassDiv192 = document.createElement("div");
            cardSpanInner.append(specialClassDiv192);
            specialClassDiv192.classList.add("cardsInInnerPlus4");
            specialClassDiv192.classList.add("card-plus4-blue");
            specialClassDiv192.classList.add("blue");

            let evenInnerSpan12 = document.createElement("span");
            specialClassDiv192.append(evenInnerSpan12);
            evenInnerSpan12.classList.add("inner");

            // div card red
            let specialClassDiv193 = document.createElement("div");
            cardSpanInner.append(specialClassDiv193);
            specialClassDiv193.classList.add("cardsInInnerPlus4");
            specialClassDiv193.classList.add("card-plus4-red");
            specialClassDiv193.classList.add("red");

            let evenInnerSpan13 = document.createElement("span");
            specialClassDiv193.append(evenInnerSpan13);
            evenInnerSpan13.classList.add("inner");

            // div card yellow
            let specialClassDiv194 = document.createElement("div");
            cardSpanInner.append(specialClassDiv194);
            specialClassDiv194.classList.add("cardsInInnerPlus4");
            specialClassDiv194.classList.add("card-plus4-yellow");
            specialClassDiv194.classList.add("yellow");

            let evenInnerSpan14 = document.createElement("span");
            specialClassDiv194.append(evenInnerSpan14);
            evenInnerSpan14.classList.add("inner");
            break;
    }
}

//animations
/**
 * Animates the action of drawing a card from the playfield deck
 * @param {*} thisHandId the player's hand
 * @param {*} randValue the card value
 * @param {*} randColor the card color
 * @param {*} thisObject the deck
 */
function drawCardAnimation(thisHandId, randValue, randColor, thisObject) {
    // obtain drawPile div
    let drawPile = document.getElementById("drawCardPile");

    // create containers for the cards and add class
    let drawCardContainer = document.createElement("div");
    let drawCardContainerBack = document.createElement("div");
    drawCardContainer.classList.add("drawCardContainer");
    drawCardContainerBack.classList.add("drawCardContainer");

    // append containers to drawpile div
    drawPile.append(drawCardContainer);
    drawPile.append(drawCardContainerBack);

    // create card visuals
    let cardDivBack = document.createElement("div");
    let cardDiv = document.createElement("div");

    // append cards into containers
    drawCardContainer.append(cardDiv);
    drawCardContainerBack.append(cardDivBack);

    //add class card to card divs
    cardDiv.classList.add("card");
    cardDivBack.classList.add("card");

    // create the inside of the cards
    let cardSpan = document.createElement("span");
    cardDiv.append(cardSpan);
    cardSpan.classList.add("inner");

    let cardSpanInner = document.createElement("span");
    cardSpan.append(cardSpanInner);
    cardSpanInner.classList.add("mark");

    let cardSpanBack = document.createElement("span");
    cardDivBack.append(cardSpanBack);
    cardSpanBack.classList.add("inner");

    let cardSpanInnerBack = document.createElement("span");
    cardSpanBack.append(cardSpanInnerBack);
    cardSpanInnerBack.classList.add("mark");

    cardDiv.append();
    cardDivBack.append();

    addCSSDesignToBackOfCard(cardDivBack, cardSpanInnerBack);

    if (thisHandId == "BottomSeat") {
        addCSSDesignToCard(cardDiv, cardSpanInner, randValue);

        // determines color of card drawn from the playfield deck
        switch (randColor) {
            case "Blue":
                cardDiv.classList.add("blue");
                break;
            case "Red":
                cardDiv.classList.add("red");
                break;
            case "Green":
                cardDiv.classList.add("green");
                break;
            case "Yellow":
                cardDiv.classList.add("yellow");
                break;
        }

        drawCardContainer.classList.add("drawCardAnimationFrontDown");
        drawCardContainerBack.classList.add("drawCardAnimationBack");
    } else {
        addCSSDesignToBackOfCard(cardDiv, cardSpanInner);

        if (thisHandId == "TopSeat") {
            drawCardContainer.classList.add("drawCardAnimationHiddenUp");
        } else if (thisHandId == "RightSeat") {
            drawCardContainer.classList.add("drawCardAnimationHiddenRight");
        } else if (thisHandId == "LeftSeat") {
            drawCardContainer.classList.add("drawCardAnimationHiddenLeft");
        } else {
            drawCardContainer.classList.add("drawCardAnimationFront");
        }
        drawCardContainerBack.classList.add("drawCardBackHidden");
    }

    setTimeout(function () {
        drawPile.removeChild(drawPile.childNodes[0]);
        drawPile.removeChild(drawPile.childNodes[0]);
        thisObject.reloadHand();
    }, 1000);
}


//cards.js
/**
 * card constructor
 * @param {*} color
 * @param {*} value
 */
function Card(color, value) {
	this.color = color;
	this.value = value;
	this.getColorValue = function () {
	  switch (this.color) {
		case "Red":
		  return "#A60000";
		case "Blue":
		  return "#0000FF";
		case "Green":
		  return "#004f19";
		case "Yellow":
		  return "#e5bf00";
		default:
		  return "#333333";
	  }
	};
  }
  
  /**
   * Function draws a specific card for cheat
   */
  function drawSpecificCard(cardColor, cardValue) {
	players[gameTurn].playerDeck.drawSpecificCard(cardColor, cardValue);
  }
  
  /**
   * Function draws a specific card for cheat code
   */
  function removeManyCards(numberOfCards) {
	if (numberOfCards > players[gameTurn].playerDeck.amtCards - 2) {
	  return;
	}
  
	for (let i = 0; i < numberOfCards; i++) {
	  players[gameTurn].playerDeck.removeCard(0);
	}
	players[gameTurn].playerDeck.reloadHand();
  }
  
  /**
   * Function draws cards and adds them to playerhand
   */
  function drawACard() {
	if (drawStack.stackAmt != 0) {
	  let drawTimes = drawStack.cardType * drawStack.stackAmt;
	  drawStack.clearVisual();
	  for (let i = 0; i < drawTimes; i++) {
		players[gameTurn].playerDeck.drawCard();
	  }
  
	  drawStack.stackAmt = 0;
	  rotatePlayers();
	  play();
	} else if (forcePlay()) {
	  let audio = new Audio("error.mp3");
  
	  audio.play();
	} else {
	  players[gameTurn].playerDeck.drawCard();
	}
  }
  
  $(drawCardPile).click(function () {
	drawACard();
  });
  
  /**
   * Changes the global card object to random color/value assignment
   */
  function selectPlayfieldCard() {
	let colorArray = ["Red", "Green", "Blue", "Yellow"];
	let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
	let randValue = Math.floor(Math.random() * 10);
	let tempCard = new Card(randColor, randValue);
  
	discard(tempCard);
  }
  
  function discard(card) {
	discardPile.addCard(card);
	if (discardPile.cards.length > 5) discardPile.removeCard(0);
  }
  
  function forcePlay() {
	for (let i = 0; i < players[gameTurn].playerDeck.cards.length; i++) {
	  if (players[gameTurn].playerDeck.isValid(i)) return true;
	}
	return false;
  }

  //cheats.js
  /**
 * Lists cheat functions in console
 */
function showMeCheats() {
    console.log("------------------------------------");
    console.log("newPlayfieldCard() -- Add new card to the discard pile");
    console.log("");

    console.log('drawSpecificCard("Color", Value) -- Give yourself a specific card');

    console.log("COLOR OPTIONS: Red, Green, Blue, Yellow, Special");
    console.log("VALUE OPTIONS for R-G-B-Y: 0-9, 10 (for draw 2), 11 (for reverse), 12 (for skip)");
    console.log("VALUE OPTIONS for 'Special': 13 for Wild, 14 for Wild Draw 4");
    console.log("");

    console.log("forceAdd(number) -- Give yourself any number of cards");
    console.log("");

    console.log("forceRemove(number) -- Remove any number of cards from your hand starting from left side");
    console.log("NOTE: Must leave at least 2 cards in hand");
    console.log("------------------------------------");
}

/**
 * Gives a new playfield card
 */
function newPlayfieldCard() {
    initializeWindow();
}

/**
 * Gives player a specific number of cards
 */
function forceAdd(numCards) {
    if (numCards > 0) {
        drawCards(numCards);
    } else {
        console.log("Invalid number of cards: " + numCards);
    }
}

/**
 * Draws a specific number of cards and adds them to player's hand
 */
function drawCards(numCards) {
    for (let i = 0; i < numCards; i++) {
        players[gameTurn].playerDeck.drawCard();
    }
}

/**
 * Removes a specific number of cards from players hand
 */
function forceRemove(numCards) {
    if (numCards > 0) {
        removeManyCards(numCards);
    } else {
        console.log("Invalid number of cards: " + numCards);
    }
}

/**
 * Gives player a specific card (input from console)
 */
function drawSpecificCard(cardColor, cardValue) {
    if ((cardColor == "Special" && cardValue > 1) || cardValue < 0) {
        console.log("Invalid wild card selection: " + cardColor + " " + cardValue);
        return;
    } else if (cardValue > 12) {
        console.log("Invalid card selection: " + cardColor + " " + cardValue);
        return;
    } else {
        drawSpecificCard(cardColor, cardValue);
    }
}

//deck.js
/**
 * deck constructor
 * @param {*} divId
 * @param {*} hidden
 */
function Deck(divId, hidden) {
    this.cards = [];
    this.amtCards = 0;
    this.hand = document.getElementById(divId);
    this.isHidden = hidden;

    /**
     * Add a card to the cards array
     */
    this.addCard = function (card) {
        this.cards.push(card);
        this.amtCards = this.cards.length;
    };

    /**
     * Remove a card from card array
     */
    this.removeCard = function (card) {
        this.cards.splice(card, 1);
        this.amtCards = this.cards.length;
    };

    /**
     * Give player a specific card for cheat code
     */
    this.drawSpecificCard = function (cardColor, cardValue) {
        let tempCardColor = cardColor;
        let tempCardValue = cardValue;

        let tempCard = new Card(tempCardColor, tempCardValue);
        this.addCard(tempCard);
        this.reloadHand();
    };

    /**
     * Give player a random card
     */
    this.drawCard = function () {
        let colorArray = ["Red", "Green", "Blue", "Yellow", "Special"];
        let randColor = colorArray[Math.floor(Math.random() * colorArray.length)];
        let randValue = Math.floor(Math.random() * 13);
        if (randColor == "Special") {
            //Pick random number between 1 and 3, if 1 or 2 make Wildcard, else regular card
            let randNum = Math.round(Math.random() * 2 + 1);
            if (randNum == 1 || randNum == 2) {
                randValue = randValue % 2;
                if (randValue == 0) {
                    randValue = 13;
                }
                else {
                    randValue = 14;
                }
            } else {
                // array of colors minus "Special" option
                randColor =
                    colorArray[Math.floor(Math.random() * (colorArray.length - 1))];
                randValue = Math.floor(Math.random() * 13);
            }
        }
        let tempCard = new Card(randColor, randValue);
        this.addCard(tempCard);

        if (!initialDraw) {
            drawCardAnimation(this.hand.id, randValue, randColor, this);
        }
        else {
            this.reloadHand();
        }

        // if drawing a card, player cannot have Uno
        players[gameTurn].unoCall = false;
    };

    /**
     * Remove card from hand and reload hand (post-validation of good move)
     */
    this.playCard = function (card) {
        let wildColorMenuIsInactive = true;
        if (this.isValid(card)) {
            // check if second to last card & Uno call protection
            if (
                players[gameTurn].playerDeck.amtCards == 2 &&
                players[gameTurn].unoCall != true
            ) {
                document.getElementById("unoButton").classList.add("unoButton");
                setTimeout(function () {
                    document.getElementById("unoButton").classList.remove("unoButton");
                }, 500);
                players[gameTurn].playerDeck.drawCard();
                players[gameTurn].playerDeck.drawCard();
            }

            let cardBeingPlayed = this.cards[card];

            discard(cardBeingPlayed);
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

            // remove played card from hand
            this.removeCard(card);
            if (this.cards.length == 0) {
                alert(players[gameTurn].playerID + " wins!");
                window.location.reload();
                return;
            }
        } else if (!players[gameTurn].isBot) {
            this.cardInvalid(card);
            return false;
        } else {
            return false;
        }

        this.reloadHand();
        if (wildColorMenuIsInactive == true) {
            rotatePlayers();
            play();
        }
        return true;
    };

    /**
     * Return card at index card
     */
    this.getCard = function (card) {
        return this.cards[card];
    };

    /**
     * Reload the player hand to have the most recent cards in player hand
     */
    this.reloadHand = function () {
        this.hand.innerHTML = "";
        for (let i = 0; i < this.amtCards; i++) {
            let cardDiv = document.createElement("div");
            this.hand.append(cardDiv);
            cardDiv.classList.add("card");

            let cardSpan = document.createElement("span");
            cardDiv.append(cardSpan);
            cardSpan.classList.add("inner");

            let cardSpanInner = document.createElement("span");
            cardSpan.append(cardSpanInner);
            cardSpanInner.classList.add("mark");

            cardDiv.append();

            if (!this.isHidden) {
                addCSSDesignToCard(cardDiv, cardSpanInner, this.getCard(i).value);

                // prevent the discardDeckDiv from being counted as playable cards
                if (this.hand.id != "discardDeckDiv") {
                    cardDiv.classList.add("my-card");
                }
                if (this.hand.id == "discardDeckDiv") {
                    if (i == discardPile.cards.length - 1) {
                        if (cardDiv.classList.contains("wild") || cardDiv.classList.contains("plus-4")) {
                            cardDiv.classList.add("chosen-wild-card-color");
                        }
                    }
                }

                switch (this.getCard(i).getColorValue()) {
                    case "#0000FF":
                        cardDiv.classList.add("blue");
                        break;
                    case "#A60000":
                        cardDiv.classList.add("red");
                        break;
                    case "#004f19":
                        cardDiv.classList.add("green");
                        break;
                    case "#e5bf00":
                        cardDiv.classList.add("yellow");
                        break;
                    default:
                        cardDiv.classList.add("black");
                }
            } else {
                addCSSDesignToBackOfCard(cardDiv, cardSpanInner);
                if (i >= 7) {
                    cardDiv.style.display = "none";
                }
            }
        }
    };

    // compare selected card to playfield card
    this.isValid = function (card) {
        //Get in the value by element ID
        let cardColor = this.cards[card].color;
        let cardNumber = this.cards[card].value;

        // will run if there is a stackable card played, +2 or +4
        if (drawStack.stackAmt != 0) {
            if (cardNumber != drawStack.cardValue) {
                return false;
            } else if (cardNumber == 1 && cardColor != "Special") {
                return false;
            } else {
                return true;
            }
        }

        if (
            cardColor == discardPile.cards[discardPile.cards.length - 1].color ||
            cardColor == "Special"
        ) {
            return true;
        }
        if (cardNumber == discardPile.cards[discardPile.cards.length - 1].value) {
            return true;
        }
        return false;
    };

    this.cardInvalid = function (card) {
        let audio = new Audio("error.mp3");
        if (players[gameTurn].isBot == false) audio.play();
        players[gameTurn].playerDeck.hand.childNodes[card].classList.add("invalid");
        setTimeout(function () {
            players[gameTurn].playerDeck.hand.childNodes[card].classList.remove(
                "invalid"
            );
        }, 500);
    };
}

//players.js
/**
 * Player constructor
 * @param {*} deck
 * @param {*} id
 * @param {*} index
 * @param {*} bot
 * @param {*} unoCall
 */
function Player(deck, id, index, bot, unoCall) {
	this.isBot = bot;
	this.playerDeck = deck;
	this.playerID = id;
	this.playerIndex = index;
	this.playerUnoCall = unoCall;
	this.botLogic = function () {
	  let numBotCards = this.playerDeck.amtCards;
  
	  // bot behavior
	  for (let i = 0; i < numBotCards; i++) {
		if (players[gameTurn].playerDeck.isValid(i)) {
		  if (players[gameTurn].playerDeck.amtCards == 2) {
			players[gameTurn].unoCall = true;
		  }
		  players[gameTurn].playerDeck.playCard(i);
		  return;
		}
	  }
  
	  if (drawStack.stackAmt != 0) {
		drawACard();
	  } else {
		// draw a card and check if it is a match. Will break loop if hits 20 card limit (prevents infinite decks)
		while (!this.playerDeck.playCard(this.playerDeck.amtCards - 1)) {
		  drawACard();
		}
	  }
	};
  }
  
  /**
   * End current player's turn and begin next player's turn
   */
  function rotatePlayers() {
	gameTurn = gameTurn + gameDirection;
  
	if (gameTurn == players.length) {
	  gameTurn = 0;
	}
	else if (gameTurn < 0) {
	  gameTurn = players.length - 1;
	}
  }

  
  //special cards.js

  /**
 * Reverse the direction of player rotation
 */
function cardReverse() {
	if (players.length == 2) {
	  rotatePlayers();
	} else {
	  gameDirection = -1 * gameDirection;
	}
  }
  
  /**
   * Skip the next player in rotation
   */
  function cardSkip() {
	rotatePlayers();
  }
  
  function cardWild() {
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
  
  function selectWildColor(color) {
	discardPile.cards[
	  discardPile.cards.length - 1
	].color = color;
	$(".chosen-wild-card-color .inner").css("background", convertColorToHex(color));
	isColorSelected = true;
	rotatePlayers();
	play();
	document.getElementById("overlay").style.display = "none";
  }
  
  function cardDraw2() {
	drawStack.stackAmt++;
	drawStack.cardType = 2;
	drawStack.cardValue = 10;
	drawStack.updateStack();
  }
  
  function cardDraw4() {
	drawStack.stackAmt++;
	drawStack.cardType = 4;
	drawStack.cardValue = 1;
	drawStack.updateStack();
	cardWild();
  }
  
  function convertColorToHex(color) {
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

  //index.js
  $(document).ready(function () {
	$(document).on("click", ".my-card", function () {
	  let cardIndex = $(".my-card").index(this);
	  players[gameTurn].playerDeck.playCard(cardIndex);
	});
  });
  
  // global Playfield Card
  let discardPile = new Deck("discardDeckDiv", false);
  
  // create a Global array to store players
  let players = [];
  
  // amount of players in the game
  let amtPlayers = 4;
  
  // initial amount of cards for each player
  let initialCards = 7;
  
  // global Turn Tracker
  let gameTurn = 0;
  
  // set direction of game, 1 for forward, -1 for backward
  let gameDirection = 1;
  
  // store if initial draw
  let initialDraw = true;
  
  // store how many +2, or +4s are stacked
  let drawStack = {
	cardValue: 0,
	stackAmt: 0,
	cardType: 2, // either 2 or 4
	updateStack: function () {
	  document.getElementById("drawCardPile").innerHTML =
		"+" + this.cardType * this.stackAmt;
	},
	clearVisual: function () {
	  document.getElementById("drawCardPile").innerHTML = "";
	}
  };
  
  /**
   * Change the displayed text and call function to randomize playfield card
   */
  function initializeWindow() {
	// re-assign global card value to random values
	selectPlayfieldCard();
	discardPile.reloadHand();
  }
  
  function initializePlayers() {
	// fill the players array with 2-4 people or bots (future; currently only allows two players)
	let seats = ["BottomSeat", "RightSeat", "TopSeat", "LeftSeat"];
	let botNames = [
	  "Buffy Summers",
	  "Hermione Granger",
	  "Derek Zoolander",
	  "Elle Woods",
	  "Dr. Rumack",
	  "Wade Wilson",
	  "Chon Wang",
	  "Regina George",
	  "Ron Burgundy",
	  "Lord Dark Helmet",
	  "Edna Mode",
	  "Randle McMurphy",
	  "Optimus Prime",
	  "Clarice Starling",
	  "Norman Bates",
	  "Groot",
	  "Leslie Knope",
	  "Gromit",
	  "Red",
	  "Samwise Gamgee",
	  "Bilbo Baggins",
	  "Katherine G. Johnson",
	  "Ace Ventura",
	  "Sarah Connor",
	  "Axel Foley",
	  "Elaine Benes",
	  "Daenerys Targaryen",
	  "Dorothy Gale",
	  "Vito Corleone",
	  "Arya Stark",
	  "Shuri",
	  "Shaun Riley",
	  "Obi-Wan Kenobi",
	  "Captain America",
	  "Ferris Bueller",
	  "Dorothy Vaughan",
	  "Rocky Balboa",
	  "Atticus Finch",
	  "Brienne of Tarth",
	  "Jules Winnfield",
	  "Peter Venkman",
	  "Gandalf",
	  "Imperator Furiosa",
	  "Forrest Gump",
	  "Sansa Stark",
	  "Patrick Bateman",
	  "Rey",
	  "Hannibal Lecter",
	  "Doc Brown",
	  "Rick Blaine",
	  "Captain Jack Sparrow",
	  "Ellen Ripley",
	  "Mary Jackson",
	  "Iron Man",
	  "Marty McFly",
	  "Michael Corleone",
	  "Annalise Keating",
	];
  
	while (players.length < amtPlayers) {
	  let seatIndex = Math.round(4 / amtPlayers) * players.length;
	  let playerHandDiv = seats[seatIndex];
	  let playerHandLabel = playerHandDiv + "ID";
  
	  let tempDeck;
  
	  if (players.length == 0) {
		tempDeck = new Deck(playerHandDiv, false);
	  } else {
		tempDeck = new Deck(playerHandDiv, true); // set to true to blackout
	  }
  
	  let tempID = document.getElementById("playerName").value;
  
	  let tempIndex = players.length - 1;
  
	  let isBot = false;
  
	  let botIndex = Math.floor(Math.random() * botNames.length);
	  let botName = botNames[botIndex];
  
	  if (players.length != 0 || tempID == "Bot") {
		tempID = botName;
		botNames.splice(botIndex, 1);
		isBot = true;
	  }
  
	  document.getElementById(playerHandLabel).innerHTML =
		"<h3>" + tempID + "</h3>";
  
	  let tempPlayer = new Player(tempDeck, tempID, tempIndex, isBot, false);
  
	  players.push(tempPlayer);
  
	  for (let i = 0; i < initialCards; i++) {
		players[players.length - 1].playerDeck.drawCard();
	  }
	}
  
	initialDraw = false;
  
	play();
  }
  
  function startGame() {
	let playerNameInput = document.getElementById("playerName");
	let playerName = playerNameInput.value;
	playerNameInput.classList.remove("is-valid");
	if (playerName.length == 0) {
	  playerNameInput.classList.add("is-invalid");
	  return;
	}
	document.getElementById("setupGame").classList.add("d-none");
	document.getElementById("playingField").classList.remove("d-none");
	let playerAmtDiv = document.getElementById("amtPlayers");
	let playerAmt = playerAmtDiv.options[playerAmtDiv.selectedIndex].value;
	amtPlayers = playerAmt;
  
	initializeWindow();
	initializePlayers();
  }
  
  function play() {
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
  }
  
  /**
   * Uno call button
   */
  function callUno() {
	if (players[gameTurn].playerDeck.amtCards > 2) {
	  players[gameTurn].playerDeck.drawCard();
	  players[gameTurn].playerDeck.drawCard();
	} else {
	  players[gameTurn].unoCall = true;
	}
  }
  
  return (
	<>
	<div id="setupGame" class="container">
    <form class="text-center">
      <div class="form-group mt-5">
        <label for="playerName">
          <h1>Player Name</h1>
        </label>
        <input type="text" class="form-control form-size" id="playerName" value="TheLegend27" />
      </div>
      <div class="form-group mt-5">
        <label for="amtPlayers">
          <h1>Number of Players</h1>
        </label>
        <select class="form-control form-size" id="amtPlayers">
          <option value="2" selected="selected">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>
      <div class="form-group mt-5">
        <button class="btn btn-primary center-block" type="button" onclick="startGame()">
          <h1>New Game</h1>
        </button>
      </div>
      <div class="form-group mt-5">
        <button class="btn btn-primary center-block" type="button" onclick="window.open('rules.html','_self')">
          <h1>Rules & Info</h1>
        </button>
      </div>
    </form>

  </div>

  <div id="playingField" class="container mt-5 d-none">
    <div class="row">
      <div class="col center-card-hands" align="center">
        <div id="TopSeatID"></div>
        <div id="TopSeat"></div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-2">
        <div id="LeftSeatID"></div>
        <div id="LeftSeat" class="sideHand"></div>
      </div>
      <div class="col-md-8 center-card-hands" align="center">
        <div class="row" style="padding-top: 50px; padding-bottom: 50px">
          <div class="col" style="padding-right: 200px">
            <div class="drawDeckOnPlayfield black">
              <div id="drawCardPile"></div>
            </div>
          </div>

          <div class="col">
            <br />
            <div id="unoButton">
              <button class="btn btn-primary center-block" type="button" onclick="callUno()">
                <h2>Call Uno!</h2>
              </button>
            </div>
          </div>
        </div>
        <div class="row">
          <div id="discardDeckDiv"></div>
          <div id="playfieldHand"></div>
        </div>
      </div>
      <div class="col-md-2">
        <div id="RightSeatID"></div>
        <div id="RightSeat" class="sideHand"></div>
      </div>
    </div>

    <div class="row">
      <div class="col center-card-hands" align="center">
        <div id="BottomSeatID"></div>
        <div id="BottomSeat"></div>
        <div id="player1Hand"></div>
      </div>
    </div>

    <div id="wildColor"></div>
    <div id="overlay">
      <div id="text">
        <center>Choose a color!</center>
        <div class="main-container">
          <div class="size red-circle" onclick="selectWildColor('Red')"></div>
          <div class="size blue-circle" onclick="selectWildColor('Blue')"></div>
          <div class="size yellow-circle" onclick="selectWildColor('Yellow')"></div>
          <div class="size green-circle" onclick="selectWildColor('Green')"></div>
        </div>
      </div>
    </div>
    </div>
	</>
  )
}

export default Game