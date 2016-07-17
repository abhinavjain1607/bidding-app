var React =  require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
const { Provider } = require('react-redux');
const { createStore } = Redux;
import appReducer from './reducers/appReducer';
import App from './components/App';

const TodoApp = () => (
	<Provider store={createStore(appReducer)}>
		<App />
	</Provider>
);

ReactDOM.render(<TodoApp/>, document.getElementById('app'));