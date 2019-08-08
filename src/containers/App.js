import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';
// import { robots } from './robots';
import './App.css'

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error,
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	};
}

class App extends Component {
	/* constructor() {
		super();
		this.state = {
			robots: []
			// searchfield: ''
		}
	} */

	componentDidMount(){
		/* fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => {
				this.setState({ robots: users })
			}) */
		this.props.onRequestRobots();
	}

	//MB - Arrow function required so that "this" always refers to the object in which the function is defined. As otherwise, this belongs to the object in which the event is triggered
	/*onSearchChange = (event) => {
		this.setState(
			{ searchfield: event.target.value }
		);
	}*/

	//Render seems to reflect state changes.
	render() {
		//const { robots , searchfield  } = this.state;

		const { robots, searchField, onSearchChange, isPending } = this.props;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

		if (robots.length === 0 || isPending === true){
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
					<SearchBox searchChange = { onSearchChange }/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);