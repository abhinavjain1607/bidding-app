const user = (state, action) => {
	switch(action.type) {
		case 'SET_SOLD' : 
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				isSold: true
			});
		case 'SET_BID_STARTED' :
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				bidStarted: true
			});
		case 'SET_CURRENT_BID' :
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				currentBid: action.value
			});
		case 'SET_TEAM_ID' :
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				teamId: action.teamId
			});
	}
};

const users = (state = initializeUsers(), action) => {
	switch(action.type) {
		case 'SET_SOLD' : 
			return state.map( u =>
				user(u, action)
			);
		case 'SET_BID_STARTED' : 
			return state.map( u =>
				user(u, action)
			);
		case 'SET_CURRENT_BID' : 
			return state.map( u =>
				user(u, action)
			);
		case 'SET_TEAM_ID' :
			return state.map( u =>
				user(u, action)
			);
	}
};

/*
	Role = 1: Players
	Role = 2: Managers
*/
let initializeUsers = () => {
	return [
		{
			userId: 1,
			userName: 'Abhinav',
			userBaseValue: 10,
			userRole: 1,
			userImage: 'abhinav',
			userDesc: 'desc',
			isSold : false,
			bidStarted : false,
			currentBid: null,
			teamId: null
		},
		{
			userId: 2,
			userName: 'Jalaj',
			userBaseValue: 10,
			userRole: 1,
			userImage: 'jalaj',
			userDesc: 'desc',
			isSold : false,
			bidStarted : false,
			currentBid: null,
			teamId: null
		},
		{
			userId: 3,
			userName: 'Madan',
			userBaseValue: 10,
			userRole: 2,
			userImage: 'madan',
			userDesc: 'desc',
			isSold : false,
			bidStarted : false,
			currentBid: null,
			teamId: null
		}
	];
};

export default users;