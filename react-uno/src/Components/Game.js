import React, { useState, useEffect, useRef } from "react";
import { botNames } from "./BotNames";

function Game() {
	const [players, setPlayers] = useState([]);
	const [playerAmount, setPlayerAmount] = useState(4);
	const [initialCards, setInitialCards] = useState(7);
	const [gameTurn, setGameTurn] = useState(0);
	const [isClockwise, setIsClockwise] = useState(true);
	const [isInitialDraw, setIsInitialDraw] = useState(true);

	return (
		<>
			<div id="setupGame" className="container">
				<form className="text-center">
					<div className="form-group mt-5">
						<label for="playerName">
							<h1>Player Name</h1>
						</label>
						<input
							type="text"
							className="form-control form-size"
							id="playerName"
							value="TheLegend27"
						/>
					</div>
					<div className="form-group mt-5">
						<label for="amtPlayers">
							<h1>Number of Players</h1>
						</label>
						<select className="form-control form-size" id="amtPlayers">
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
							onclick="startGame()"
						>
							<h1>New Game</h1>
						</button>
					</div>
					<div className="form-group mt-5">
						<button
							className="btn btn-primary center-block"
							type="button"
							onclick="window.open('rules.html','_self')"
						>
							<h1>Rules & Info</h1>
						</button>
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
						<div className="row" >
							{/* style={"padding-right: 200px"} */}
							<div className="col" >
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
