import "./App.css";
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Detail from "./components/Detail";
import Login from "./components/Login";
import RestaurantList from "./components/RestaurantList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [location, setLocation] = useState("HOME");
	const onSelect = useCallback((category) => setLocation(category));

	return (
		<div className="App">
			<Routes>
				{/* <Route
					path="/"
					element={<Navbar onSelect={onSelect} location={location} />}
				> */}
				<Route index element={<Main onSelect={onSelect} />} />
				<Route path="restaurants/:category" element={<RestaurantList />} />
				<Route path="restaurants/detail" element={<Detail />} />
				<Route path="/login" element={<Login />} />
				{/* </Route> */}
				<Route path="*" element={<div>There's nothing here!</div>} />
			</Routes>
		</div>
	);
}

export default App;
