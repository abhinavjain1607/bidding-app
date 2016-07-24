const biddingState = (state = initializeBiddingState(), action) => {
	switch(action.type) {
		case 'SET_CURRENT_ROUND' : 
			return Object.assign({}, state, {
				currentRoundId: action.id
			});
		case 'SET_CURRENT_PLAYER' : 
			return Object.assign({}, state, {
				currentPlayerId: action.id
			});
	}
	return state;
};

let initializeBiddingState = () => {
	return {
		currentRoundId: null,
		currentPlayerId: null
	};
};

export default biddingState;
