import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
// import App from './App';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import { searchRobots, requestRobots } from './reducers';

const rootReducer = combineReducers({ searchRobots, requestRobots });

const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger));

//MB - Loads the contents of app, inside the root element (see index.html in the public folder)
ReactDOM.render(
	<Provider store={store} >
		<App />
	</Provider>
, document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
