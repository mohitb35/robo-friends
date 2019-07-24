import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import App from './App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';

//MB - Loads the contents of app, inside the root element (see index.html in the public folder)
ReactDOM.render(
				<App />
, document.getElementById('root')); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
