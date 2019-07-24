import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import './App.css'

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: [],
			searchfield: ''
		}
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users })
			})
	}

	//MB - Arrow function required so that "this" always refers to the object in which the function is defined. As otherwise, this belongs to the object in which the event is triggered
	onSearchChange = (event) => {
		this.setState(
			{ searchfield: event.target.value }
		);
	}

	//Render seems to reflect state changes.
	render() {
		const { robots, searchfield } = this.state;

		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})

		if (robots.length === 0){
			return (
				<div className="flex items-center justify-center vh-100">
					<h1 className="tc">Loading</h1>
				</div>
			);
		} else {
			return (
				//searchChange passes the onSearchChange function to the child component, and robots passes filtered robots
				<div className = "tc">
					<h1 className="f1">Robo Friends</h1>
					<SearchBox searchChange = { this.onSearchChange }/>
					<Scroll>
						<ErrorBoundary>
							<CardList robots = { filteredRobots }/>
						</ErrorBoundary>
					</Scroll>
				</div>	
			);
		}
	}
}

export default App;