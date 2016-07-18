import React from 'react';
import { connect } from 'react-redux';

class ManagersBidOnPlayer extends React.Component {
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

ManagersBidOnPlayer = connect((state) => {
	return state;
})(ManagersBidOnPlayer);

export default ManagersBidOnPlayer;