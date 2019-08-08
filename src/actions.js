import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAILURE
} from './constants';

export const setSearchField = (text) => ({
	type: CHANGE_SEARCH_FIELD,
	payload: text
});

//need the () around the object because it is otherwise interpreted as a code block. Don't need () for other return types.

export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(data => dispatch({
			type: REQUEST_ROBOTS_SUCCESS,
			payload: data
		}))
		.catch(error => dispatch({
			type: REQUEST_ROBOTS_FAILURE,
			payload: error
		}));
}