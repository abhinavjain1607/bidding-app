import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
// import commonStyles from './commonStyles.sass';
import Paper from 'material-ui/Paper';
import UserDisplay from './auctionedPlayer/UserDisplay';
import ManagerSoldDisplay from './auctionedPlayer/ManagerSoldDisplay';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import IconPrevious from 'material-ui/svg-icons/av/skip-previous';
import IconNext from 'material-ui/svg-icons/av/skip-next';
let showNextPlayer = require('../actions').showNextPlayer;
let showPrevPlayer = require('../actions').showPrevPlayer;

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '0px 32px 8px 0',
  width: '1200px',
  height: '150px',
  'textAlign': 'center',
};

const style2 = {
  margin: '55px 40px',
  width: '130px',
  float: 'left',
};

const style3 = {
	...style2,
	marginLeft: '45px'
};

class AuctionedPlayer extends React.Component {
	constructor(props) {
		super(props);
		/*this.state = {
			currentUserIndex: 0,
			currentUser: props.users[0]
		};*/
		this.dispatch = props.dispatch;
		this.imageFolder = '../app/assets/images/';
		this.selectedManagerID = 1;
	}

	clickPrev() {
		this.dispatch(showPrevPlayer());
	}

	clickNext() {
		this.dispatch(showNextPlayer());
	}

	getCurrentUser() {
		let currentUser = null;
		this.props.users.map( (user) => {
			if(user.userId === this.props.biddingState.currentPlayerId) {
				currentUser = user;
			}
		});

		return currentUser;
	}

	render() {
		var user = this.getCurrentUser();
		return (
			<Paper style={style}>
				<FlatButton style={style2}
								label="Prev"
	      						labelPosition="after"
	      						secondary={true}
	      						onClick={this.clickPrev.bind(this)}
	      						icon={<IconPrevious />}>
	      		</FlatButton>
				<UserDisplay currentUser={this.getCurrentUser()}/>
				<ManagerSoldDisplay dispatch={this.props.dispatch} currentRoundId={this.props.biddingState.currentRoundId} currentUser={this.getCurrentUser()} managers={this.props.managers}/>
				<FlatButton style={style3}
								label="Next"
	      						labelPosition="before"
	      						secondary={true}
	      						onClick={this.clickNext.bind(this)}
	      						icon={<IconNext />}>
	      		</FlatButton>
			</Paper>
		);
	}
}

export default CSSModules(connect((state) => {
	return state;
})(AuctionedPlayer), null, {allowMultiple: true});