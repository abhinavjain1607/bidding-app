const user = (state, action) => {
	switch(action.type) {
		case 'SET_SOLD' :
			if(state.userId !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				isSold: true,
				soldValue: action.currentBid,
				managerId:action.managerId
			});
		case 'SET_BID_STARTED_FOR_PLAYER' :
			if(state.userId !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				bidStarted: true
			});
		case 'SET_CURRENT_BID' :
			if(state.userId !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				currentBid: action.value
			});
		case 'SET_TEAM_ID_FOR_PLAYER' :
			if(state.userId !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				managerId: action.managerId
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

	return state;
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
			isSold : true,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null,
			isCurrentlyOngoing: 1
		},
		{
			userId: 2,
			userName: 'Jalaj',
			userBaseValue: 10,
			userRole: 1,
			userImage: 'jalaj',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null,
			isCurrentlyOngoing: 0
		},
		{
			userId: 3,
			userName: 'Madan',
			userBaseValue: 10,
			userRole: 2,
			userImage: 'madan',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null,
			isCurrentlyOngoing: 0
		}
	];
};

export default users;
