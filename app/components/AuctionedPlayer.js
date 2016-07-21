import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
// import commonStyles from './commonStyles.sass';
import Paper from 'material-ui/Paper';
import Menu from 'material-ui/Menu';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ActionAndroid from 'material-ui/svg-icons/action/thumb-up';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const style = {
  display: 'inline-block',
  float: 'left',
  margin: '16px 32px 16px 0',
  width: '1200px',
  height: '160px',
  'textAlign': 'center',
};

const style1 = {
  margin: '5px',
  width: '150px',
  float: 'left',
  height: '150px'
};

const style2 = {
  margin: '5px',
  width: '100%',
};

const spanStyle = {
	'width': '33%',
	float: 'left',
	'height': '100%'
}

const spanStyle1 = {
	...spanStyle,
	'width': '33%'
}

const spanStyle2 = {
	...spanStyle,
	'width': '15%'
}
const spanStyle3 = {
	...spanStyle,
	'width': '10%',
}


class AuctionedPlayer extends React.Component {
	constructor(props) {
		super(props);
		this.currentUser = 1;
		this.dispatch = props.dispatch;
		this.imageFolder = '../app/assets/images/';
	}

	render() {
		return (
			<Paper style={style}>
				<div style={spanStyle1}>
				</div>
				<div style={spanStyle2}>
					<img style={style1} src={this.imageFolder + '/' + this.currentUser + '.jpg'}></img>
				</div>
				<div style={spanStyle3}>
					<SelectField value={1} style={style2}>
			          <MenuItem value={1} primaryText="Kalyan" />
			          <MenuItem value={2} primaryText="Rajiv" />
			          <MenuItem value={3} primaryText="Varun" />
			          <MenuItem value={4} primaryText="Amruth" />
			          <MenuItem value={5} primaryText="Vinay" />
			        </SelectField>
					<FlatButton label="Sold"
	      						labelPosition="before"
	      						secondary={true}
	      						icon={<ActionAndroid />}>
	      			</FlatButton>
				</div>
					
					
			</Paper>
		);
	}
}

export default CSSModules(connect((state) => {
	return state;
})(AuctionedPlayer), null, {allowMultiple: true});