const currentUser = (state = initializeCurrentUser(), action) => {
	return state;
};
let initializeCurrentUser = () => {
	return [
		{
			userId: null,
			userName: null,
			userBaseValue: null,
			userRole: null,
			userImage: null,
			userDesc: null,
			isSold : null,
			soldValue: null,
			bidStarted : null,
			currentBid: null,
			teamId: null,
			isCurrentlyOngoing: null
		}
	];
};

export default currentUser;
