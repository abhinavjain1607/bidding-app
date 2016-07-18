var React =  require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
const { Provider } = require('react-redux');
const { createStore } = Redux;
import appReducer from './reducers/appReducer';
import BaseContainer from './containers/BaseContainer';

let store = createStore(appReducer);

const BiddingApp = () => (
	<Provider store={store}>
		<BaseContainer />
	</Provider>
);


ReactDOM.render(<BiddingApp/>, document.getElementById('app'));