import React from 'react';
import { connect } from 'react-redux';

class ManagersAndTeams extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				Hello
			</div>
		);
	}
}

ManagersAndTeams = connect((state) => {
	return state;
})(ManagersAndTeams);

export default ManagersAndTeams;