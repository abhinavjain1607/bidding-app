var React =  require('react');
var ReactDOM = require('react-dom');
var Redux = require('redux');
const { Provider } = require('react-redux');
const { createStore } = Redux;
import appReducer from './reducers/appReducer';
import App from './components/App';

let store = createStore(appReducer);

const TodoApp = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

console.log(store.getState());

ReactDOM.render(<TodoApp/>, document.getElementById('app'));