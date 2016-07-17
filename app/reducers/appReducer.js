import todos from './users';
import visibilityFilter from './teams';
var Redux = require('redux');

const { combineReducers } = Redux;

const appReducer = combineReducers({
	users,
	teams
});

export default appReducer;