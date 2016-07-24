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
	height: '0px',
};

const listStyle = {
	paddingTop: '0px',
	paddingBottom: '5px',
	minHeight: '240px'
};

const cardHeaderStyle = {
	paddingTop: '10px',
	paddingBottom: '0px'
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

	  render() {
	  	console.log('yes');
	  	let listItem = (a) => {
	  		return <ListItem
	  					key={a}
				      	innerDivStyle={listItemStyle}
				        primaryText="Chelsea Otakan"
				        leftIcon={<ActionGrade color={pinkA200} />}
				        rightAvatar={<Avatar src={this.imageFolder + 'abhinav.jpg'} />}
				      />
	  	};
	  	const listItems = [1,2,3,4,5,6].map( (a) => {
	  		return listItem(a);
	  	});
		  return (
			<Card style={style} expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
		        <CardHeader
		          style={cardHeaderStyle}
		          title="URL Avatar"
		          subtitle="Subtitle"
		          avatar={this.imageFolder + 'abhinav.jpg'}
		          actAsExpander={true}
		          showExpandableButton={true}
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