import React from 'react';
import { tsPropertySignature } from '@babel/types';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border: '1px solid black', height: '800px', padding: '20px' }}>
			{props.children}
		</div>
	)
}

export default Scroll;