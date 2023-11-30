import React from "react";
import { Link } from "react-router-dom";

const Rules = () => {
	return (
		<div className="rules">
			<h1>
				<center>Rule and Information</center>
			</h1>
			{/* style="width: 75%; font-size: 24px" */}
			<div>
				<ul>
					<li>This is a modified version of the game of Uno.</li>

					<li>
						You must call uno before playing your second-to-last card. Penalty
						for not doing this is to draw 2 cards.
					</li>

					<li>
						If you do not have a valid card to play you must draw until you get
						one you can play.
					</li>

					<li>
						The draw-4 cards can be stacked. If a player plays a draw-4, the
						next player must play a draw-4 or else draw the total number of
						cards from the deck. This same rule applies to the draw-2 card.
					</li>
				</ul>
			</div>
			{/* style="text-align:center" */}
			<div className="form-group mt-5 rulesBtn">
				<Link className="btn btn-primary center-block" to={"/"}>
					<h2>Return to Main Menu</h2>
				</Link>
			</div>
		</div>
	);
};

export default Rules;
