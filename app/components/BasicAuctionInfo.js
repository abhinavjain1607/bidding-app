import React from 'react';
import { connect } from 'react-redux';
const setSoldPlayer = require('../actions').setSoldPlayer;
import CSSModules from 'react-css-modules';
import commonStyles from './commonStyles.sass';
console.log(commonStyles);
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
				<p styleName="header">Total Players are : { this.getTotalNoOfPlayers() }</p>
				<p styleName="header">Sold Players are : { this.getSoldPlayers() }</p>
				<p styleName="header">Remaining Players are : { this.getTotalNoOfPlayers() - this.getSoldPlayers() }</p>
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


export default connect((state) => {
	return state;
})(CSSModules(BasicAuctionInfo, commonStyles, {allowMultiple: true}));
