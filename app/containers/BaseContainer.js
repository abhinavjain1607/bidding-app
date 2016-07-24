var React =  require('react');
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
	console.log(state);
	return {
		users: state.users,
		managers: state.managers,
		rounds: state.rounds,
		biddingState: state.biddingState
	};
};

const BaseContainer = connect(mapStateToProps)(App);

export default BaseContainer;