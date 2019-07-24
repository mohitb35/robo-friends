import React from 'react';
import './Card.css';

//You can also accept props instead of destructured params as below, and either refer to props directly (e.g. props.name) or destructure props within the function

const Card = ({ id, name, email }) => {
	return (
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img src={`https://robohash.org/${id}?200x200`} alt="profile" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	)
}

export default Card;