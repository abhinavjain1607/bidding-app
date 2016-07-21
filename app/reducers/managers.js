const manager = (state, action) => {
	switch(action.type) {
		case 'SET_SOLD' :
			if(state.managerId !== action.managerId) {
        return Object.assign({}, state, {
  			  currentBalance: state.bankBalance,
          currentBid: 0,
        });

			}

      return Object.assign({}, state, {
				bankBalance: state.bankBalance - state.currentBid,
        currentBalance: state.bankBalance,
        currentBid: 0,
        minimumBalance:state.minimumBalance - 10,
				investedUsers: [
														...state.investedUsers,
														{
															userid: action.userid,
															value: action.currentBid
														}

										]
			});

			return [

			]

		case 'SET_CURRENT_BID' :
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
        currentBalance: state.bankBalance - action.value
				currentBid: action.value
      });
		case 'SET_TEAM_ID_FOR_PLAYER' :
			if(state.id !== action.id) {
				return state;
			}

			return Object.assign({}, state, {
				teamId: action.teamId
			});
	}
};

const managers = (state = initializeUsers(), action) => {
	switch(action.type) {
		case 'SET_SOLD' :
			return state.map( m =>
				manager(m, action)
			);
	 case 'SET_CURRENT_BID' :
			return state.map( m =>
				manager(m, action)
			);
		case 'SET_TEAM_ID' :
			return state.map( m =>
				manager(m, action)
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
			managerId: 1,
			managerName: 'Abhinav',
			managerImage: 'abhinav',
			managerDesc: 'desc',
      initialValue: 100,
			bankBalance: 92,
      currentBalance: 82,
      currentBid: 10,
      minimumBalance: 40,
			teamId: null,
      investedUsers: [

                        {
                          userId: 2,
                          purchasedValue: 8
                        }

                      ],
      myUsers: [
                  {
                    userId: 1,
                    purchasedValue: 30
                  }
                ]
		},
		{
			managerId: 2,
			managerName: 'Jalaj',
			managerImage: 'jalaj',
			managerDesc: 'desc',
      initialValue: 100,
			bankBalance: 92,
      currentBalance: 82,
      currentBid: 10,
      minimumBalance: 40,
			teamId: null,
      investedUsers: [

                        {
                          userId: 2,
                          purchasedValue: 8
                        }

                      ],
      myUsers: [
                  {
                    userId: 3,
                    purchasedValue: 8
                  }
                ]
		},
		{
			managerId: 3,
			managerName: 'Madan',
			managerImage: 'madan',
			managerDesc: 'desc',
      initialValue: 100,
			bankBalance: 92,
      currentBalance: 82,
      currentBid: 10,
      minimumBalance: 40,
			teamId: null,
      investedUsers: [

                        {
                          userId: 2,
                          purchasedValue: 8
                        }

                      ],
      myUsers: []
		}
	];
};

export default managers;
