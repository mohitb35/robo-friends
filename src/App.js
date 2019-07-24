import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots';

class App extends Component {
	constructor() {
		super();
		this.state = {
			robots: robots,
			searchfield: ''
		}
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
	
		return (
			//searchChange passes the onSearchChange function to the child component, and robots passes filtered robots
			<div className = "tc">
				<h1>Robo Friends</h1>
				<SearchBox searchChange = { this.onSearchChange }/>
				<CardList robots = { filteredRobots }/>
			</div>	
		);
	}
}

export default App;