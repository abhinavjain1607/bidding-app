import React from 'react';
import { connect } from 'react-redux';
const setSoldPlayer = require('../actions').setSoldPlayer;
import CSSModules from 'react-css-modules';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
// import commonStyles from './commonStyles.sass';

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
};

class BasicAuctionInfo extends React.Component {
	constructor(props) {
		super(props);
		this.dispatch = props.dispatch;
	}

	getTotalNoOfPlayers() {
		console.log(this.props);
		return this.props.rounds[this.props.biddingState.currentRoundId]['allPlayers'].length
	}

	getSoldPlayers() {
		var length = this.props.rounds[this.props.biddingState.currentRoundId]['soldPlayers'].length;
		return length > 0 ? length : '0';
	}

	render() {
		return (
			<div>
				<Paper style={style}>
			      <Menu width={200}>
			        <MenuItem primaryText="Total Players " secondaryText={ this.getTotalNoOfPlayers() }/>
			        <MenuItem primaryText="Sold Players" secondaryText={ this.getSoldPlayers() }/>
			        <MenuItem primaryText="Remaining Players" secondaryText={ this.getTotalNoOfPlayers() - this.getSoldPlayers() }/>
			      </Menu>
			    </Paper>
			</div>
		);
	}
}

export default CSSModules(connect((state) => {
	return state;
})(BasicAuctionInfo), null, {allowMultiple: true});