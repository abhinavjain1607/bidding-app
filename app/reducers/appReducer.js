import users from './users';
import teams from './teams';
var Redux = require('redux');

const { combineReducers } = Redux;

const appReducer = combineReducers({
	users,
	teams
});

export default appReducer;