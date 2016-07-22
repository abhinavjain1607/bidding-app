import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
const setSoldPlayer = require('../../actions').setSoldPlayer;
// import commonStyles from './commonStyles.sass';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconThumb from 'material-ui/svg-icons/action/thumb-up';

const style2 = {
  margin: '5px',
  width: '100%',
};

const spanStyle = {
	'width': '33%',
	float: 'left',
	'height': '100%'
}

const spanStyle3 = {
	...spanStyle,
	'width': '10%',
}

const textFieldStyle = {
	'textAlign': 'center'
};

class ManagerSoldDisplay extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			selectedManagerID: props.managers[0].managerId,
			soldInputFieldValue: props.currentUser.soldValue ? props.currentUser.soldValue : props.currentUser.userBaseValue,
			deActivateSoldButton: isNaN(props.currentUser.soldValue) ? true : false,
		};
		this.dispatch = props.dispatch;
		this.imageFolder = '../app/assets/images/';
	}

	handleManagerChange = (event, index, value) => this.setState({selectedManagerID: value});

	onEnterSoldValue = (event, value) => {
		this.setState({soldInputFieldValue: value});
		isNaN(value) || value <= 0 ? this.setState({deActivateSoldButton: true}) : this.setState({deActivateSoldButton: false});
	};

	soldPlayer() {
		console.log(this.state.soldInputFieldValue);
		this.dispatch(setSoldPlayer(
			this.props.currentUser.userId,
			parseInt(this.state.soldInputFieldValue),
			this.state.selectedManagerID
		));
		this.setState({soldInputFieldValue: 0});
	}

	bindInputField(node) {
		this.input = node;
	}

	render() {
		var managersList = this.props.managers.map((manager) => {
			return <MenuItem key={manager.managerId} value={manager.managerId} primaryText={manager.managerName} />
		});
		return (
				<div style={spanStyle3}>
					<SelectField value={this.state.selectedManagerID} style={style2} onChange={this.handleManagerChange.bind(this)}>
			         	{managersList}
			        </SelectField>
			         <TextField
			         	inputStyle={textFieldStyle}
			         	onChange={this.onEnterSoldValue.bind(this)}
			         	value={this.state.soldInputFieldValue}
			         	style={style2}
					    hintText="Enter Sold Value"
					    disabled={this.props.currentUser.isSold}
					 /><br />
					<FlatButton style={style2}
								disabled={this.state.deActivateSoldButton || this.props.currentUser.isSold}
								label="Sold"
	      						labelPosition="before"
	      						secondary={true}
	      						onClick={this.soldPlayer.bind(this)}
	      						icon={<IconThumb />}>
	      			</FlatButton>
				</div>
		);z
	}
}

export default CSSModules(ManagerSoldDisplay, null, {allowMultiple: true});