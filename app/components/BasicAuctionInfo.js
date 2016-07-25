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
  margin: '0px 32px 8px 0',
  height: '180px'
};

const listItemStyle = {
	// marginTop: '-5px'
	fontSize: '23px'
};

const listItemStyleCenter = {
	...listItemStyle,
	height: '25px',
	margin: 0,
	// marginTop: '-15px',
	padding: 0,
	textAlign: 'center',
	color: 'red'
}

class BasicAuctionInfo extends React.Component {
	constructor(props) {
		super(props);
		this.dispatch = props.dispatch;
	}

	getBold(data) {
		return <b>{data}</b>
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
		let roundNumber = this.props.biddingState.currentRoundId + 1;
		return (
			<div>
				<Paper style={style}>
			      <Menu width={200}>
			        <MenuItem innerDivStyle={listItemStyleCenter} primaryText={this.getBold('Round - ' + roundNumber) }/>
			        <MenuItem innerDivStyle={listItemStyle} primaryText="Total Players " secondaryText={ this.getTotalNoOfPlayers() }/>
			        <MenuItem innerDivStyle={listItemStyle} primaryText="Sold Players" secondaryText={ this.getSoldPlayers() }/>
			        <MenuItem innerDivStyle={listItemStyle} primaryText="Remaining Players" secondaryText={ this.getTotalNoOfPlayers() - this.getSoldPlayers() }/>
			      </Menu>
			    </Paper>
			</div>
		);
	}
}

export default CSSModules(connect((state) => {
	return state;
})(BasicAuctionInfo), null, {allowMultiple: true});