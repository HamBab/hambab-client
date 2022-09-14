import "./App.css";
import { useState, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Detail from "./components/Detail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import RestaurantList from "./components/RestaurantList";
import MakeGroup from "./components/MakeGroup";
<<<<<<< HEAD
import Chat from "./components/chat/Chat";
=======
import EditGroup from "./components/EditGroup";
import MyPage from "./components/MyPage"
>>>>>>> 077b5ed9a77178b1202083ec9c161b5e7337bb3d
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
	const [location, setLocation] = useState("HOME");
	const onSelect = useCallback((category) => setLocation(category));

	return (
		<div className="App">
			<Routes>
				<Route
					path="/"
					element={<Navbar onSelect={onSelect} location={location} />}
				>
					<Route index element={<Main onSelect={onSelect} />} />
					<Route path="restaurants/:category" element={<RestaurantList />} />
					<Route path="restaurants/detail" element={<Detail />} />
					<Route path="restaurants/makegroup" element={<MakeGroup />} />
					<Route path="restaurants/editgroup" element={<EditGroup />} />
					<Route path="/login" element={<Login />} />                        
					<Route path="/signup" element={<Signup />} />
<<<<<<< HEAD
					<Route path="/restaurants/chat" element={<Chat />} />
=======
					<Route path="/mypage" element={<MyPage />} />              
>>>>>>> 077b5ed9a77178b1202083ec9c161b5e7337bb3d
				</Route>
				<Route path="*" element={<div>There's nothing here!</div>} />
			</Routes>
		</div>
	);
}

export default App;
