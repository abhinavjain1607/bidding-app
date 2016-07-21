import users from './users';
import managers from './managers';
import currentUser from './currentUser';

var Redux = require('redux');

const { combineReducers } = Redux;

const appReducer = combineReducers({
	currentUser
	users,
	managers
});

export default appReducer;
