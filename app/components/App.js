var React =  require('react');
import { connect } from 'react-redux';
import BasicAuctionInfo from './BasicAuctionInfo';
import AuctionedPlayer from './AuctionedPlayer';
import ManagersBidOnPlayer from './ManagersBidOnPlayer';
import ManagersAndTeams from './ManagersAndTeams';

let App = () => {
	return (
		<div>
			<div>
				<BasicAuctionInfo />
				{/*<AuctionedPlayer />
				<ManagersBidOnPlayer />
			</div>
			<div>
				<ManagersAndTeams />*/}
			</div>
		</div>
	)
}

export default App;