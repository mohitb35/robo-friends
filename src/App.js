import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
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
		const filteredRobots = this.state.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if (this.state.robots.length === 0){
			return (
				<h1>Loading</h1>
			);
		} else {
			return (
				//searchChange passes the onSearchChange function to the child component, and robots passes filtered robots
				<div className = "tc">
					<h1 className="f1">Robo Friends</h1>
					<SearchBox searchChange = { this.onSearchChange }/>
					<Scroll>
						<CardList robots = { filteredRobots }/>
					</Scroll>
				</div>	
			);
		}
	}
}

export default App;