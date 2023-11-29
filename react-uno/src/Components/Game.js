import React, { useState, useEffect } from "react";
import {botNames} from './BotNames'

function Game() {
	const [players, setPlayers] = useState([])
	const [playerAmount, setPlayerAmount] = useState()
	const [initialCards, setInitialCards] = useState(7)
	const [gameTurn, setGameTurn] = useState(0)
	const [isClockwise, setIsClockwise] = useState(true)
	const [isInitialDraw, setIsInitialDraw] = useState(true)
	return (
		<div>
		</div>
	);
}

export default Game;