import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

const imageStyle = {
  margin: '0px',
  marginLeft: '30px',
  width: '180px',
  float: 'left',
  height: '180px'
};

const menuStyle = {
	margin: '5px',
	width: '430px',
	float: 'left',
	height: '150px',
	'textAlign': 'left',
	'lineHeight' : 1
};

const spanStyle2 = {
	'width': '55%',
	float: 'left',
	height: '100%',
	background: 'beige'
};

const menuItemStyle = {
	lineHeight: '35px',
	fontSize: '27px'
};

const menuItemStyleName = {
	...menuItemStyle
};

const menuItemStyleSold = {
	...menuItemStyle,
	textAlign: 'center'
};

const redText = {
	color: 'red'
};

const greenText = {
	color: 'green'
};

class UserDisplay extends React.Component {

	constructor(props) {
		super(props);
		console.log(props);
		this.imageFolder = '../app/assets/images/';
	}

	getBold(data) {
		return <b>{data}</b>
	}

	getBoldAndGreen(data) {
		return <span style={greenText}><b>{data}</b></span>
	}

	render() {
		var user = this.props.currentUser;

		let checkIfSoldItem = () => {
			let text = '';
			if(!user.isSold) text = <light>NA</light>;
			else
			text = this.getBold(user.soldValue + ' Crore(s)');
			return text;
		};

		return (
				<div style={spanStyle2}>
					<Menu style={menuStyle}>
				        <MenuItem primaryText="Name" secondaryText={this.getBoldAndGreen(user.shortName)} innerDivStyle={menuItemStyleName}/>
				        <MenuItem primaryText="Base amount" secondaryText={this.getBold(user.userBaseValue + ' Crore(s)')} innerDivStyle={menuItemStyle}/>
				        <MenuItem primaryText={user.isSold == true ? <span style={redText}>SOLD</span> : 
				        						<span style={greenText}>AVAILABLE</span>} innerDivStyle={menuItemStyleSold}/>
				        <MenuItem primaryText="Sold amount" secondaryText={checkIfSoldItem()} innerDivStyle={menuItemStyle}/>
				    </Menu>
					<img style={imageStyle} src={this.imageFolder + '/' + user.userImage }></img>
				</div>
		);
	}
}

export default CSSModules(UserDisplay, null, {allowMultiple: true});
