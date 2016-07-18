import React from 'react';
import { connect } from 'react-redux';

class AuctionedPlayer extends React.Component {
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

AuctionedPlayer = connect((state) => {
	return state;
})(AuctionedPlayer);

export default AuctionedPlayer;