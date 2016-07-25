const user = (state, action) => {
	switch(action.type) {
		case 'SET_SOLD' :
			if(state.userId !== action.userId) {
				return state;
			}

			return Object.assign({}, state, {
				isSold: true,
				soldValue: action.value,
				managerId:action.managerId
			});
		case 'SET_BID_STARTED_FOR_PLAYER' :
			if(state.userId !== action.userId) {
				return state;
			}

			return Object.assign({}, state, {
				bidStarted: true
			});
		case 'SET_CURRENT_BID' :
			if(state.userId !== action.userId) {
				return state;
			}

			return Object.assign({}, state, {
				currentBid: action.value
			});
		case 'SET_TEAM_ID_FOR_PLAYER' :
			if(state.userId !== action.userId) {
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

const captain_basevalue = 6;
const others_basevalue = 2;

/*
	Role = 1: Players
	Role = 2: Managers
*/
let initializeUsers = () => {
	return [
		{
			userId: 1,
			userName: 'Rajiv Jayaraman',
			shortName: 'Rajiv',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'rajiv.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 2,
			userName: 'Kalyan Maganti',
			shortName: 'Kalyan',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'Kalyan.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 3,
			userName: 'Sreedhar Badrinath',
			shortName: 'Sreedhar',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'sreedhar.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 4,
			userName: 'Bharath Janyavula',
			shortName: 'Bharath',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'bharat.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 5,
			userName: 'Abhinav Jain',
			shortName: 'Abhinav',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'abhinav.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 6,
			userName: 'Vinay Chilukuri',
			shortName: 'Vinay C',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'Vinay.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 7,
			userName: 'Kishen Ramaswamy',
			shortName: 'Kishen',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'Kishen.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 8,
			userName: 'M Varun Kumar',
			shortName: 'Varun',
			userBaseValue: captain_basevalue,
			userRole: 1,
			userImage: 'varun.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 9,
			userName: 'Anu Rajiv',
			shortName: 'Anu Rajiv',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Anu.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 10,
			userName: 'Akshatha Vijendra',
			shortName: 'Akshatha',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'DSC_2109.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 11,
			userName: 'Arpitha Chandrashekar',
			shortName: 'Arpitha',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'arpitha.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 12,
			userName: 'Bhavna B S',
			shortName: 'Bhavna',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Bhavna.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 13,
			userName: 'Meenal Jain',
			shortName: 'Meenal',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Meenal-Jain.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 14,
			userName: 'Sindhu Anandhakrishnan',
			shortName: 'Sindhu',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'sindhu.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 15,
			userName: 'Nikita Madhusudan',
			shortName: 'Nikitha',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'nikita.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 16,
			userName: 'Neeraj Tomar',
			shortName: 'Neeraj',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Neeraj.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 17,
			userName: 'Amruth T',
			shortName: 'Amruth',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Amruth.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 18,
			userName: 'Ashok Ramnath',
			shortName: 'Ashok R',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'ashok.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 19,
			userName: 'Ashok Srikantaiah',
			shortName: 'Ashok S',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Ashok S.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 20,
			userName: 'Akshay Sharma',
			shortName: 'Akshay',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'akshay.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 21,
			userName: 'Girish Kapileswarapu',
			shortName: 'Girish',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'girish.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 22,
			userName: 'Jalaj Minda',
			shortName: 'Jalaj',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'jalaj.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 23,
			userName: 'Sameer Agarwal',
			shortName: 'Sameer',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'sameer.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 24,
			userName: 'Sethu Meenakshisundaram',
			shortName: 'Sethu',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'setu.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 25,
			userName: 'Vamshi Velagapuri',
			shortName: 'Vamshi',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'DSC_2243.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 26,
			userName: 'Vinay Bharadwaj',
			shortName: 'Vinay B',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Vinay.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 27,
			userName: 'Sunny Rajkotiya',
			shortName: 'Sunny',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'sunny.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 28,
			userName: 'Sourabh Jain',
			shortName: 'Sourabh J',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Sourabhjain.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 29,
			userName: 'Dharmik Jampala',
			shortName: 'Dharmik',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Dharmik.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 30,
			userName: 'Nizamuddin',
			shortName: 'Nizam',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Nizam.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 31,
			userName: 'Sourabh Parmar',
			shortName: 'Sourabh P',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Parmar.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 32,
			userName: 'Vivek Duhan',
			shortName: 'Vivek',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'vivek.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 33,
			userName: 'Aditi Kashyap',
			shortName: 'Aditi',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Adi.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 34,
			userName: 'Farida Kothari',
			shortName: 'Farida',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Farida.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 35,
			userName: 'Ramya L',
			shortName: 'Ramya',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Ramya.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 36,
			userName: 'Srigayatri Rachakonda',
			shortName: 'Gayatri',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'srigayatri.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 37,
			userName: 'Ujjwal Jain',
			shortName: 'Ujjwal',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Ujjwal.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 38,
			userName: 'Samyukta Pai',
			shortName: 'Sam',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'sam.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 39,
			userName: '-------',
			shortName: '',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: '',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 40,
			userName: '--------',
			shortName: '',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: '',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 41,
			userName: 'Ajinkya Wankhade',
			shortName: 'Ajinkya',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Ajinkya.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 42,
			userName: 'Bibek Luitel',
			shortName: 'Bibek',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Bibek.JPG',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 43,
			userName: 'Govardhan Reddy',
			shortName: 'Govardhan',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Govardhan.jpeg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 44,
			userName: 'Kabir Joshi',
			shortName: 'Kabir',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Kabir.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 45,
			userName: 'Suyog Nitin Patil',
			shortName: 'Suyog',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Suyog.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 46,
			userName: 'Rakesh Kumar Sharma',
			shortName: 'Rakesh',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Rakesh.JPG',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 47,
			userName: 'Saran Sai',
			shortName: 'Saran',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Saran.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		},
		{
			userId: 48,
			userName: 'Suraj V',
			shortName: 'Suraj',
			userBaseValue: others_basevalue,
			userRole: 2,
			userImage: 'Suraj.jpg',
			userDesc: 'desc',
			isSold : false,
			soldValue: null,
			bidStarted : false,
			currentBid: null,
			managerId: null
		}
	];
};

export default users;
