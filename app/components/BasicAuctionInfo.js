import React from 'react';
import { connect } from 'react-redux';
const setSoldPlayer = require('../actions').setSoldPlayer;


class BasicAuctionInfo extends React.Component {
	constructor(props) {
		super(props);
		this.dispatch = props.dispatch;
	}

	getTotalNoOfPlayers() {
		var total = 0;
		this.props.users.map( (user) => {
			total++;
		});

		return total;
	}

	getSoldPlayers() {
		var total = 0;
		this.props.users.map( (user) => {
			user.isSold && total++;
		});

		return total;
	}

	render() {

		return (
			<div>
				<h3>Total Players are : { this.getTotalNoOfPlayers() }</h3>
				<h3>Sold Players are : { this.getSoldPlayers() }</h3>
				<h3>Remaining Players are : { this.getTotalNoOfPlayers() - this.getSoldPlayers() }</h3>
				<form onSubmit={e => {
			        e.preventDefault()
			        this.dispatch(setSoldPlayer(2))
			    }}>
			        <button type="submit">
			          	Setting 2nd player as sold
			        </button>
		      	</form>
			</div>
		);
	}
}

BasicAuctionInfo = connect((state) => {
	return state;
})(BasicAuctionInfo);

export default BasicAuctionInfo;