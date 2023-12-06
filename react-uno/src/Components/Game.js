	import React, { useState, useEffect, useRef } from "react";
	import { botNames } from "./BotNames";
	import { Deck } from "./Deck";
	import * as Players from "./Players";
	import { selectWildColor } from "./SpecialCards";
	import { selectPlayfieldCard, Card, discard } from './Cards';
	import Global from "./GlobalVars";

	export function Game() {
		const [isPlayerNameValid, setPlayerNameValid] = useState(true);
		let playerAmount = Global.playerAmount;
		let playerName = Global.playerName;
		let players = Global.players;
		let initialCards = Global.initialCards;
		let gameTurn = Global.gameTurn;
		let discardPile = Global.discardPile;

		useEffect(() =>{
			startGame()
		}, [])

		useEffect(() => {
			const handleCardClick = (event) => {
				let cardIndex = event.currentTarget.dataset.index;
				players[gameTurn].playerDeck.playCard(cardIndex);
			};

			// Replace jQuery with React event handling
			const myCardElements = document.querySelectorAll(".my-card");
			myCardElements.forEach((card) => {
				card.addEventListener("click", handleCardClick);
			});

			return () => {
				myCardElements.forEach((card) => {
					card.removeEventListener("click", handleCardClick);
				});
			};
		}, [gameTurn, players]);

		function initializePlayers(bNames) {
			// fill the players array with 2-4 people or bots (future; currently only allows two players)
			let seats = ["BottomSeat", "RightSeat", "TopSeat", "LeftSeat"];
			let botNames = bNames;

			while (players.length < playerAmount) {
				let seatIndex = Math.round(4 / playerAmount) * players.length;
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

				let tempPlayer = new Players(tempDeck, tempID, tempIndex, isBot, false);

				players.push(tempPlayer);

				for (let i = 0; i < initialCards; i++) {
					players[players.length - 1].playerDeck.drawCard();
				}
			}

			Global.isInitialDraw = false;
			Global.playerName = playerName;
			Global.playerAmount = playerAmount;

			play(players, gameTurn);
		}

		/**
		 * Change the displayed text and call function to randomize playfield card
		 */
		function initializeWindow() {
			// re-assign global card value to random values
			selectPlayfieldCard(discardPile, Card);
			// Refs Cards.js, Going to have to change this
			discardPile.reloadHand(discardPile);
		}

		function startGame() {
			document.getElementById("playingField").classList.remove("d-none");
			let playerAmtDiv = playerAmount;
			let playerAmt = playerAmtDiv;
			playerAmount = playerAmt;

			initializeWindow();
			initializePlayers(botNames);
		}

		function callUno() {
			if (players[gameTurn].playerDeck.amtCards > 2) {
				players[gameTurn].playerDeck.drawCard();
				players[gameTurn].playerDeck.drawCard();
			} else {
				players[gameTurn].unoCall = true;
			}
		}

		function play(players, gameTurn) {
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

		return (
			<>
				<div id="playingField" className="container mt-5 d-none">
					<div className="row">
						<div className="col center-card-hands" align="center">
							<div id="TopSeatID"></div>
							<div id="TopSeat"></div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-2">
							<div id="LeftSeatID"></div>
							<div id="LeftSeat" className="sideHand"></div>
						</div>
						<div className="col-md-8 center-card-hands" align="center">
							{/* style="padding-top: 50px; padding-bottom: 50px" */}
							{/* style="padding-right: 200px" */}
							<div className="row">
								<div className="col">
									<div className="drawDeckOnPlayfield black">
										<div id="drawCardPile"></div>
									</div>
								</div>

								<div className="col">
									<br />
									<div id="unoButton">
										<button
											className="btn btn-primary center-block"
											type="button"
											onClick={() => callUno()}
										>
											<h2>Call Uno!</h2>
										</button>
									</div>
								</div>
							</div>
							<div className="row">
								<div id="discardDeckDiv"></div>
								<div id="playfieldHand"></div>
							</div>
						</div>
						<div className="col-md-2">
							<div id="RightSeatID"></div>
							<div id="RightSeat" className="sideHand"></div>
						</div>
					</div>

					<div className="row">
						<div className="col center-card-hands" align="center">
							<div id="BottomSeatID"></div>
							<div id="BottomSeat"></div>
							<div id="player1Hand"></div>
						</div>
					</div>

					<div id="wildColor"></div>
					<div id="overlay">
						<div id="text">
							<center>Choose a color!</center>
							<div className="main-container">
								<div
									className="size red-circle"
									onClick={() => selectWildColor("Red")}
								></div>
								<div
									className="size blue-circle"
									onClick={() => selectWildColor("Blue")}
								></div>
								<div
									className="size yellow-circle"
									onClick={() => selectWildColor("Yellow")}
								></div>
								<div
									className="size green-circle"
									onClick={() => selectWildColor("Green")}
								></div>
							</div>
						</div>
					</div>
				</div>
			</>
		);
	}

	export default Game;
