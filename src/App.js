import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Header />}>
					<Route index element={<Main />} />
				</Route>
				<Route path="*" element={<div>There's nothing here!</div>} />
			</Routes>
		</div>
	);
}

export default App;
