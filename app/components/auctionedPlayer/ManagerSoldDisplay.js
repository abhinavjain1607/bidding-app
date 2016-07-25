import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
const setSoldPlayer = require('../../actions').setSoldPlayer;
const setUndoPlayer = require('../../actions').setUndoPlayer;
// import commonStyles from './commonStyles.sass';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import TextField from 'material-ui/TextField';
import IconThumb from 'material-ui/svg-icons/action/thumb-up';
let showNextPlayer = require('../../actions').showNextPlayer;

const style2 = {
  ...fontStyle,
  margin: '10px',
  width: '100%',
};

const spanStyle = {
	'width': '33%',
	float: 'left',
	'height': '100%'
}

const spanStyle3 = {
	...spanStyle,
	marginLeft: '50px',
	'width': '14%',
}

const textFieldStyle = {
	...fontStyle,
	'textAlign': 'center'
};

const inputStyle = {
	width: '40%'
};

const rightLabelStyle = {
	fontSize: '25px',
	width: '60%'
};

const fontStyle = {
	fontSize: '25px'
};

class ManagerSoldDisplay extends React.Component {
	constructor(props) {
		super(props);
		console.log(props);
		this.state = {
			selectedManagerID: props.managers[0].managerId,
			soldInputFieldValue: props.currentUser.soldValue ? props.currentUser.soldValue : props.currentUser.userBaseValue,
			deActivateSoldButton: isNaN(props.currentUser.soldValue) ? true : false,
			playerChanged: true
		};
		// this.soldInputFieldValue = props.currentUser.soldValue ? props.currentUser.soldValue : props.currentUser.userBaseValue;
		this.dispatch = props.dispatch;
		this.imageFolder = '../app/assets/images/';
	}

	componentWillReceiveProps(props) {
		this.setState({soldInputFieldValue: props.currentUser.soldValue ? props.currentUser.soldValue : props.currentUser.userBaseValue});
	}

	handleManagerChange = (event, index, value) => this.setState({selectedManagerID: value});

	onEnterSoldValue = (event, value) => {
		this.setState({soldInputFieldValue: value});
		isNaN(value) || value <= 0 ? this.setState({deActivateSoldButton: true}) : this.setState({deActivateSoldButton: false});
	};

	soldPlayer() {
		this.dispatch(setSoldPlayer(
			this.props.currentUser.userId,
			this.state.soldInputFieldValue,
			this.state.selectedManagerID,
			this.props.currentRoundId
		));
		this.dispatch(showNextPlayer());
	}

	undoPlayer() {
		this.dispatch(setUndoPlayer(
			this.props.currentUser.userId,
			this.props.currentUser.soldValue,
			this.props.currentUser.managerId,
			this.props.currentRoundId
		));
	}

	getSoldInputFieldValue() {
		this.soldInputFieldValue = this.props.currentUser.soldValue ? this.props.currentUser.soldValue : this.props.currentUser.userBaseValue;
	}

	bindInputField(node) {
		this.input = node;
	}

	render() {
		var managersList = this.props.managers.map((manager) => {
			return <MenuItem innerDivStyle={fontStyle} key={manager.managerId} value={manager.managerId} primaryText={manager.managerName} />
		});
		return (
				<div style={spanStyle3}>
					<SelectField value={this.state.selectedManagerID} labelStyle={fontStyle} style={style2} onChange={this.handleManagerChange.bind(this)}>
			         	{managersList}
			        </SelectField>
			        <span style={style2}>
				        <TextField
				        	inputStyle={fontStyle}
				        	style={textFieldStyle}
				        	onChange={this.onEnterSoldValue.bind(this)}
				        	value={this.state.soldInputFieldValue}
				        	style={inputStyle}
						   	hintText="Price"
						   	disabled={this.props.currentUser.isSold}
						/>
						<span style={rightLabelStyle}>Crore(s)</span><br/>
					</span>
					<FlatButton style={style2}
								labelStyle={fontStyle}
								disabled={false}
								label={this.props.currentUser.isSold ? 'Undo' : 'Sell'}
	      						labelPosition="before"
	      						secondary={true}
	      						onClick={this.props.currentUser.isSold ? this.undoPlayer.bind(this) : this.soldPlayer.bind(this)}
	      						icon={<IconThumb />}>
	      			</FlatButton>
				</div>
		);z
	}
}

export default CSSModules(ManagerSoldDisplay, null, {allowMultiple: true});