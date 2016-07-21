var React =  require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
const { Provider } = require('react-redux');
const { createStore } = Redux;
import appReducer from './reducers/appReducer';
import BaseContainer from './containers/BaseContainer';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

let store = createStore(appReducer);

const BiddingApp = () => (
	<MuiThemeProvider muiTheme={getMuiTheme()}>
		<Provider store={store}>
			<BaseContainer />
		</Provider>
	</MuiThemeProvider>
);


ReactDOM.render(<BiddingApp/>, document.getElementById('app'));