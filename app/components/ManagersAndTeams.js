import React from 'react';
import { connect } from 'react-redux';
import CSSModules from 'react-css-modules';
import ManagerList from './ManagerList';
// import commonStyles from './commonStyles.sass';

class ManagersAndTeams extends React.Component {
	constructor(props) {
		super(props);
	}

  render() {
  	let managers = this.props.managers.map( (manager) => {
  		return <ManagerList key={manager.managerId} managerData={manager} users={this.props.users}/>
  	});
    return (
      <div>
      		{managers}
      </div>
    );
  }
}

export default CSSModules(connect((state) => {
	return state;
})(ManagersAndTeams), null, {allowMultiple: true});