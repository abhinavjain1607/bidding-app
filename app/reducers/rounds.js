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
		case 'SET_UNSOLD' : 
			if(state.roundId != action.roundId) {
				return state;
			}

			let foundIndex = null;
			state['soldPlayers'].map( (userId, key) => {
				if(userId == action.userId) {
					index = key;
				}
			})
			console.log(state);
			return Object.assign({}, state, {
				unSoldPlayers: [
					...state.unSoldPlayers,
					action.userId
				],
				soldPlayers: [
					...state.soldPlayers.slice(0, index),
					...state.soldPlayers.slice(index+1)
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
		case 'SET_UNSOLD' : 
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
			allPlayers: [1,8,2,5,7,3,4,19],
			unSoldPlayers: [1,8,2,5,7,3,4,19],
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
			allPlayers: [17,18,20,6,21,26,23,29,28,44,31,24,30,27,25,32],
			unSoldPlayers: [17,18,20,6,21,26,23,29,28,44,31,24,30,27,25,32],
			soldPlayers: []
		},
		{
			roundId: 3,
			allPlayers: [33,34,35,36,37,38],
			unSoldPlayers: [33,34,35,36,37,38],
			soldPlayers: []
		},
		{
			roundId: 4,
			allPlayers: [41,42,43,22,45,46,47,48],
			unSoldPlayers: [41,42,43,22,45,46,47,48],
			soldPlayers: []
		}
	];
};

export default rounds;
