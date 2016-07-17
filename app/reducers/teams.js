const team = (state, action) => {

};

const teams = (state = initializeTeams(), action) => {
	return state;
};

let initializeTeams = () => {
	return [
		{
			teamId: 1,
			teamName: 'RCB'
		},
		{
			teamId: 2,
			teamName: 'RR'
		},
		{
			teamId: 3,
			teamName: 'RPS'
		}
	];
};

export default teams;