const round = (state, action) => {
	console.log(state, action);
	switch(action.type) {
		case 'SET_SOLD' : 
			if(state.roundId != action.roundId) {
				return state;
			}

			let index = null;
			state['unSoldPlayers'].map( (userId, key) => {
				if(userId == action.userId) {
					index = key;
				}
			})

			return Object.assign({}, state, {
				soldPlayers: [
					...state.soldPlayers,
					action.userId
				],
				unSoldPlayers: [
					...state.unSoldPlayers.slice(0, index),
					...state.unSoldPlayers.slice(index+1)
				]
			});
	}

	return state;
};

const rounds = (state = initializeRounds(), action) => {
	switch(action.type) {
		case 'SET_SOLD' : 
			return state.map( (roundState) => {
				return round(roundState, action);
			});
	}

	return state;
};

let initializeRounds = () => {
	return [
		{
			roundId: 0,
			allPlayers: [1,2,3,4,5,6,7,8],
			unSoldPlayers: [1,2,3,4,5,6,7,8],
			soldPlayers: []
		},
		{
			roundId: 1,
			allPlayers: [9,10,11,12,13,14,15,16],
			unSoldPlayers: [9,10,11,12,13,14,15,16],
			soldPlayers: []
		},
		{
			roundId: 2,
			allPlayers: [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
			unSoldPlayers: [17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],
			soldPlayers: []
		},
		{
			roundId: 3,
			allPlayers: [33,34,35,36,37,38,39,40],
			unSoldPlayers: [33,34,35,36,37,38,39,40],
			soldPlayers: []
		},
		{
			roundId: 4,
			allPlayers: [41,42,43,44,45,46,47,48],
			unSoldPlayers: [41,42,43,44,45,46,47,48],
			soldPlayers: []
		}
	];
};

export default rounds;
