import React, { useState, useEffect, useRef } from "react";
import { botNames } from "./BotNames";
import { Link } from "react-router-dom";
import { Deck } from "./Deck"
import { Player } from "./Players"
import $ from 'jquery';
import {
	drawSpecificCard,
	removeManyCards,
	drawACard,
	selectPlayfieldCard,
	discard,
	forcePlay,
	Card,
} from "./Cards";

function Game() {
	const [players, setPlayers] = useState([]);
	const [playerName, setPlayerName] = useState("TheLegend27");
	const [playerAmount, setPlayerAmount] = useState(2);
	const [initialCards, setInitialCards] = useState(7);
	const [gameTurn, setGameTurn] = useState(0);
	const [isClockwise, setIsClockwise] = useState(true);
	const [isInitialDraw, setIsInitialDraw] = useState(true);

	// Might have to change this
	$(document).ready(function () {
		$(document).on("click", ".my-card", function () {
			let cardIndex = $(".my-card").index(this);
			players[gameTurn].playerDeck.playCard(cardIndex);
		});
	});

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
		},
	};

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

			let tempPlayer = new Player(tempDeck, tempID, tempIndex, isBot, false);

			players.push(tempPlayer);

			for (let i = 0; i < initialCards; i++) {
				players[players.length - 1].playerDeck.drawCard();
			}
		}

		setIsInitialDraw(false);

		play();
	}

	/**
	 * Change the displayed text and call function to randomize playfield card
	 */
	function initializeWindow() {
		// re-assign global card value to random values
		selectPlayfieldCard();
		// Refs Cards.js, Going to have to change this
		discardPile.reloadHand();
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
		playerAmount = playerAmt;

		initializeWindow();
		initializePlayers(botNames);
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
			<div id="setupGame" className="container">
				<form className="text-center">
					<div className="form-group mt-5">
						<label for="playerName">
							<h1>Player Name</h1>
						</label>
						<input
							onChange={(e) => setPlayerName(e.target.value)}
							type="text"
							className="form-control form-size"
							id="playerName"
							value={playerName}
						/>
					</div>
					<div className="form-group mt-5">
						<label for="amtPlayers">
							<h1>Number of Players</h1>
						</label>
						<select
							className="form-control form-size"
							id="amtPlayers"
							onChange={(e) => setPlayerAmount(e.target.value)}
						>
							<option value="2" selected="selected">
								2
							</option>
							<option value="3">3</option>
							<option value="4">4</option>
						</select>
					</div>
					<div className="form-group mt-5">
						<button
							className="btn btn-primary center-block"
							type="button"
							onclick={() => startGame()}
						>
							<h1>New Game</h1>
						</button>
					</div>
					<div className="form-group mt-5">
						<Link className="btn btn-primary center-block" to={"/rules"}>
							<h1>Rules & Info</h1>
						</Link>
					</div>
				</form>
			</div>
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
						{/* style={"padding-top: 50px; padding-bottom: 50px"} */}
						<div className="row">
							{/* style={"padding-right: 200px"} */}
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
										onclick="callUno()"
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
								onclick="selectWildColor('Red')"
							></div>
							<div
								className="size blue-circle"
								onclick="selectWildColor('Blue')"
							></div>
							<div
								className="size yellow-circle"
								onclick="selectWildColor('Yellow')"
							></div>
							<div
								className="size green-circle"
								onclick="selectWildColor('Green')"
							></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Game;
