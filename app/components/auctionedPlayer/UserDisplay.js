import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const style1 = {
  margin: '5px',
  width: '150px',
  float: 'left',
  height: '150px'
};

const menuStyle = {
	margin: '5px',
	width: '200px',
	float: 'left',
	height: '150px',
	'textAlign': 'left',
	'lineHeight' : 1
};

const spanStyle2 = {
	'width': '33%',
	float: 'left',
	height: '100%',
	background: 'beige'
};

const menuItemStyle = {
	lineHeight: '35px'
};

class UserDisplay extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.imageFolder = '../app/assets/images/';
	}

	render() {
		var user = this.props.currentUser;
		return (
				<div style={spanStyle2}>
					<Menu style={menuStyle}>
				        <MenuItem primaryText="Name" secondaryText={user.shortName} innerDivStyle={menuItemStyle}/>
				        <MenuItem primaryText="Base value" secondaryText={user.userBaseValue} innerDivStyle={menuItemStyle}/>
				        <MenuItem primaryText="Is sold" secondaryText={user.isSold == true ? 'Yes':'False'} innerDivStyle={menuItemStyle}/>
				        <MenuItem primaryText="Sold value" secondaryText={user.soldValue} innerDivStyle={menuItemStyle}/>
				    </Menu>
					<img style={style1} src={this.imageFolder + '/' + user.userImage }></img>
				</div>
		);
	}
}

export default CSSModules(UserDisplay, null, {allowMultiple: true});
