var React =  require('react');
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => {
	return {
		users: state.users,
		teams: state.teams,
		managers: state.managers
	};
};

const BaseContainer = connect(mapStateToProps)(App);

export default BaseContainer;