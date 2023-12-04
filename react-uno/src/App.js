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
						<Link className="btn btn-primary center-block" to={"/game"}>
							<h1>New Game</h1>
						</Link>
					</div>
					<div className="form-group mt-5">
						<Link className="btn btn-primary center-block" to={"/rules"}>
							<h1>Rules & Info</h1>
						</Link>
					</div>
				</form>
			</div>
		</>
	);
}

export default App;
