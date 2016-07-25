import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
// import commonStyles from './commonStyles.sass';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import {List, ListItem} from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import {pinkA200, transparent} from 'material-ui/styles/colors';

const style = {
  display: 'inline-block',
  width: '23%',
  float: 'left',
  height: '100%',
	margin: '0 20px 15px 0'
};

const listItemStyle = {
	float: 'left',
	width: '70%',
	height: '5px',
};

const listStyle = {
	paddingTop: '5px',
	paddingBottom: '5px',
	minHeight: '300px'
};

const cardHeaderStyle = {
	paddingTop: '10px',
	paddingBottom: '0px'
};

const titleStyle = {
	fontSize: '27px'
};

const subtitleStyle = {
	fontSize: '25px',
	color: 'black'
};

const green = {
	color: 'green'
};

const rightPriceStyle = {
	float: 'left',
	paddingLeft: '250px',
    marginTop: '-21px',
    fontFamily: 'Roboto, sans-serif',
    fontSize: '15px',
    fontWeight: 'bold',
    // color: 'rgba(0, 0, 0, 0.541176)'
};

const listDivStyle = {
	float: 'leftIcon'
};

class ManagerList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	      expanded: true,
	    };
	    this.imageFolder = '../app/assets/images/';
	}

	handleExpandChange = (expanded) => {
	    this.setState({expanded: expanded});
	};

	handleToggle = (event, toggle) => {
	    this.setState({expanded: toggle});
	};

	handleExpand = () => {
	    this.setState({expanded: true});
	};

	handleReduce = () => {
	    this.setState({expanded: false});
	};

	getUserData(id) {
		let findUser = null;
		this.props.users.map( (user) => {
			if(user.userId == id) {
				findUser = user;
			}
		});

		return findUser;
	}

	getManagerSubtitle(managerData) {
		return <span>Current Balance : <b style={green}>{managerData['currentBalance']}</b> ( {managerData['bankBalance']} ) </span>
	}

	getUserName(user) {
		return <span>{user.shortName} {user.userRole == 1 ? ' (Cap)' : ''}</span>
	}

	render() {
		var managerData = this.props.managerData;
	  	let listItem = (user) => {
	  		return <span><ListItem
	  					style={listDivStyle}
	  					key={user.userId}
				      	innerDivStyle={listItemStyle}
				        primaryText={this.getUserName(user)}
				        // leftIcon={user.soldValue}
				        leftAvatar={<Avatar src={this.imageFolder + user.userImage} />}
				      />
				      <span style={rightPriceStyle}>{user.soldValue + ' Crore(s)'}</span>
				      </span>
	  	};
	  	const listItems = managerData['myUsers'].map( (user) => {
	  		return listItem(this.getUserData(user.userId));
	  	});
		  return (
			<Card style={style} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
		        <CardHeader
		          style={cardHeaderStyle}
		          titleStyle={titleStyle}
		          subtitleStyle={subtitleStyle}
		          title={managerData['managerName']}
		          subtitle={this.getManagerSubtitle(managerData)}
		          avatar={this.imageFolder + managerData['managerImage']}
		          actAsExpander={false}
		          showExpandableButton={false}
		        />
		        <CardText style={listStyle} expandable={true}>
		          <List >
				     {listItems}
				    </List>
		        </CardText>
		        {/*<CardActions>
		          <FlatButton label="Expand" onTouchTap={this.handleExpand} />
		          <FlatButton label="Reduce" onTouchTap={this.handleReduce} />
		        </CardActions>*/}
		   	</Card>
		);
	}
}

export default ManagerList;