var React =  require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
const { Provider } = require('react-redux');
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import appReducer from './reducers/appReducer';
import BaseContainer from './containers/BaseContainer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
const setCurrentRound = require('./actions').setCurrentRound;
const showNextPlayer = require('./actions').showNextPlayer;
const setCurrentPlayer = require('./actions').setCurrentPlayer;
// let store = compose(applyMiddleware(thunk))(createStore)(appReducer);

let store = createStore(
	appReducer,
	applyMiddleware(thunk)
);
// console.log(store.getState());
store.dispatch(setCurrentRound(0));
store.dispatch(setCurrentPlayer(1));
console.log(store.getState());

const BiddingApp = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={store}>
			<BaseContainer />
		</Provider>
	</MuiThemeProvider>
);

ReactDOM.render(<BiddingApp/>, document.getElementById('app'));