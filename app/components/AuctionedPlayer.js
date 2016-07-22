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

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
  width: '1200px',
  height: '160px',
  'textAlign': 'center',
};

const style2 = {
  margin: '65px 10px',
  width: '15px',
  float: 'left',
};

const style3 = {
	...style2,
	marginLeft: '45px'
};

class AuctionedPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUserIndex: 0,
			currentUser: props.users[0]
		};
		this.dispatch = props.dispatch;
		this.imageFolder = '../app/assets/images/';
		this.selectedManagerID = 1;
	}

	click() {

	}

	getCurrentUser() {
		return this.props.users[this.state.currentUserIndex];
	}

	render() {
		let currentUser = this.getCurrentUser();
		return (
			<Paper style={style}>
				<FlatButton style={style2}
	      						secondary={true}
	      						onClick={this.click.bind(this)}
	      						icon={<IconPrevious />}>
	      		</FlatButton>
				<UserDisplay currentUser={currentUser}/>
				<ManagerSoldDisplay currentUser={currentUser} dispatch={this.props.dispatch} managers={this.props.managers}/>
				<FlatButton style={style3}
	      						secondary={true}
	      						onClick={this.click.bind(this)}
	      						icon={<IconNext />}>
	      		</FlatButton>
			</Paper>
		);
	}
}

export default CSSModules(connect((state) => {
	return state;
})(AuctionedPlayer), null, {allowMultiple: true});