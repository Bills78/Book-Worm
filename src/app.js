import Nav from "./Navbar"
import Home from './Home'
import About from './About'
import AddBook from './NewBook'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
	return (
		<Router>
			<div>
				<Nav />
				<div className='content'>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/about'>
							<About />
						</Route>
						<Route path='/newBook'>
							<AddBook />
						</Route>
					</Switch>
				</div>
			</div>
		</Router>
	)
}

export default App;