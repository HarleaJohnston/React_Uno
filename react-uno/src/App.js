import logo from "./logo.svg";
import "./App.scss";
import Game from "./Components/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Rules from "./Components/Rules";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Game />,
		},
		{
			path: "/rules",
			element: <Rules />,
		},
	]);
	return <RouterProvider router={router} />;
}

export default App;
