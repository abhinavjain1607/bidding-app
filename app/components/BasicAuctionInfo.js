import React from 'react';
import { connect } from 'react-redux';
const setSoldPlayer = require('../actions').setSoldPlayer;
import CSSModules from 'react-css-modules';
import commonStyles from './commonStyles.sass';

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
		console.log('rendering auction');
		return (
			<div>
				<div styleName="header">Total Players are : { this.getTotalNoOfPlayers() }</div>
				<div styleName="header">Sold Players are : { this.getSoldPlayers() }</div>
				<div styleName="header">Remaining Players are : { this.getTotalNoOfPlayers() - this.getSoldPlayers() }</div>
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

export default CSSModules(BasicAuctionInfo, commonStyles, {allowMultiple: true});;