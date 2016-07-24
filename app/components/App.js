var React =  require('react');
import { connect } from 'react-redux';
import BasicAuctionInfo from './BasicAuctionInfo';
import AuctionedPlayer from './AuctionedPlayer';
import ManagersBidOnPlayer from './ManagersBidOnPlayer';
import ManagersAndTeams from './ManagersAndTeams';

const containerStyle = {
  marginLeft: '5px',
  width: '100%',
  height: '100%'
};

let App = () => {
	return (
		<div style={containerStyle}>
			<div>
				<BasicAuctionInfo />
				<AuctionedPlayer />
				{/*<ManagersBidOnPlayer />*/}
			</div>
			<div>
				<ManagersAndTeams />
			</div>
		</div>
	)
}

export default App;