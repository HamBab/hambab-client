import { Link, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Details from './Detail.js';

function App() {
	return <div className="App">
		<Route exact path="/">
			<Home></Home>

		</Route>
		<Route exact path="/detail">
			<Details></Details>
		</Route>
	</div >;
}

export default App;
