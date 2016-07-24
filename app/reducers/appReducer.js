import users from './users';
import managers from './managers';
import rounds from './rounds';
import biddingState from './biddingState';

var Redux = require('redux');

const { combineReducers } = Redux;

const appReducer = combineReducers({
	rounds,
	users,
	managers,
	biddingState
});


export default appReducer;
