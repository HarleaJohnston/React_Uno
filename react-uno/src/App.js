import logo from "./logo.svg";
import "./App.scss";
import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import Global from "./Components/GlobalVars";

function App() {
	const [playerName, setPlayerName] = useState("TheLegend27");
	const [playerAmount, setPlayerAmount] = useState(2);
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
							onclick={() => {
								startGame();
							}}
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

export default App;
