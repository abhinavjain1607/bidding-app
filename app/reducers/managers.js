const manager = (state, action) => {
	switch(action.type) {
		case 'SET_SOLD' :
			if(state.managerId !== action.managerId) {
		        return state;
			}

      		return Object.assign({}, state, {
				currentBalance: state.currentBalance - action.value,
		        // currentBalance: state.bankBalance,
		        // currentBid: 0,
		        // minimumBalance:state.minimumBalance - 10,
				myUsers: [
					...state.myUsers,
					{
						userId: action.userId,
						value: action.value
					}
				]
			});

		/*case 'SET_CURRENT_BID' :
			if(state.managerId !== action.managerId) {
				return state;
			}

      		let currentBidValue = action.value;
	      	if (  currentBidValue > state.bankBalance - state.minimumBalance) {
	        	//dispatch action, that this value is not possible, since it has to have minimum amout for other players also
	      	}
	      	if ( currentBidValue > state.bankBalance ) {
	        	//dispatch action, that this value is not possible, since cannot bid more than given
	      	}

			return Object.assign({}, state, {
		        currentBalance: state.bankBalance - action.value,
						currentBid: action.value
		      });*/

		/*case 'SET_TEAM_ID_FOR_PLAYER' :
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				teamId: action.teamId
			});*/
	}
};

const managers = (state = initializeManagers(), action) => {
	switch(action.type) {
		case 'SET_SOLD' :
			return state.map( m =>
				manager(m, action)
			);
	 	/*case 'SET_CURRENT_BID' :
			return state.map( m =>
				manager(m, action)
			);
		case 'SET_TEAM_ID' :
			return state.map( m =>
				manager(m, action)
			);*/
	}

	return state;
};

let initializeManagers = () => {
	return [
		{
			managerId: 1,
			managerName: 'Sourabha',
			managerImage: 'sourabha.jpg',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
      		currentBalance: 30,
      		currentBid: 10,
      		minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		},
		{
			managerId: 2,
			managerName: 'Mahesh',
			managerImage: 'mahesh.jpg',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
      		currentBalance: 30,
      		currentBid: 10,
      		minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
      	},
		{
			managerId: 3,
			managerName: 'Chaitanya',
			managerImage: 'chaitanya.jpg',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
		    currentBalance: 30,
		    currentBid: 10,
		    minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		},
		{
			managerId: 4,
			managerName: 'Dileep',
			managerImage: 'Dileep.png',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
		    currentBalance: 30,
		    currentBid: 10,
		    minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		},
		{
			managerId: 5,
			managerName: 'Vijay',
			managerImage: 'vijay.jpg',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
		    currentBalance: 30,
		    currentBid: 10,
		    minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		},
		{
			managerId: 6,
			managerName: 'Srikanta',
			managerImage: 'Srikanta.png',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
		    currentBalance: 30,
		    currentBid: 10,
		    minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		},
		{
			managerId: 7,
			managerName: 'Sandeep',
			managerImage: 'sandeep.jpg',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
		    currentBalance: 30,
		    currentBid: 10,
		    minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		},
		{
			managerId: 8,
			managerName: 'Raksha',
			managerImage: 'raksha.jpg',
			managerDesc: 'desc',
      		initialValue: 30,
			bankBalance: 30,
		    currentBalance: 30,
		    currentBid: 10,
		    minimumBalance: 40,
			teamId: null,
      		investedUsers: [],
      		myUsers: []
		}
	];
};

export default managers;
