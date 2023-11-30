import React, { useState, useEffect, useRef } from "react";
import { botNames } from "./BotNames";
import { Link } from "react-router-dom";
import { Deck } from "./Deck";
import { play, Player } from "./Players";
import $ from "jquery";
import { selectPlayfieldCard } from "./Cards";
import Global from "./GlobalVars";

function Game() {
	const [playerName, setPlayerName] = useState("TheLegend27");
	const [playerAmount, setPlayerAmount] = useState(2);

	const players = Global.players
	const initialCards = Global.initialCards
	const gameTurn = Global.gameTurn

	// Might have to change this
	$(document).ready(function () {
		$(document).on("click", ".my-card", function () {
			let cardIndex = $(".my-card").index(this);
			players[gameTurn].playerDeck.playCard(cardIndex);
		});
	});

	let discardPile = Global.discardPile

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

		Global.isInitialDraw = false
		Global.playerName = playerName;
		Global.playerAmount = playerAmount;

		play(players, gameTurn);
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

	function callUno() {
		if (players[gameTurn].playerDeck.amtCards > 2) {
			players[gameTurn].playerDeck.drawCard();
			players[gameTurn].playerDeck.drawCard();
		} else {
			players[gameTurn].unoCall = true;
		}
	}
}

export default Game;
