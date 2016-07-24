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
  	let managers = [1,2,3,4,5,6,7,8].map( (a) => {
  		return <ManagerList key={a}/>
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