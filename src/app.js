import Navigation from "./comps/Navbar"
import Home from './Home'
import About from './About'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<Router>
			<div>
				<Navigation />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App;