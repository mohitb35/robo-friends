import React from 'react';
import Card from './Card';

/* const CardList = ({ robots }) => {
	const cardArray = robots.map((user) => {
		return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
	})
	return (
		<div>
			{cardArray}
		</div>
	)
} */

const CardList = ({ robots }) => {
	/* if(true){
		throw new Error("Oh my God!");
	} */
	//Throwing error to test out Error Boundary
	return (
		<div>
			{
				robots.map((user) => {
					return <Card key={user.id} id={user.id} name={user.name} email={user.email}/>
				})	
			}
		</div>
	)
} 

export default CardList;