const setSoldPlayer = (id) => {
  return {
    type: 'SET_SOLD',
    id
  }
}

const setBiddingStartedForPlayer = (id) => {
  return {
    type: 'SET_BID_STARTED_FOR_PLAYER',
    id
  }
}

const setCurrentBidForPlayer = (id) => {
  return {
    type: 'SET_CURRENT_BID',
    id
  }
}

const setTeamIdForPlayer = (id, teamId) => {
  return {
    type: 'SET_TEAM_ID_FOR_PLAYER',
    id,
    teamId
  }
}

export {
  setSoldPlayer,
  setBiddingStartedForPlayer,
  setCurrentBidForPlayer,
  setTeamIdForPlayer
};