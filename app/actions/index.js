export const setSoldPlayer = (id) => {
  return {
    type: 'SET_SOLD',
    id
  }
}

export const setBiddingStartedForPlayer = (id) => {
  return {
    type: 'SET_BID_STARTED_FOR_PLAYER',
    id
  }
}

export const setCurrentBidForPlayer = (id) => {
  return {
    type: 'SET_CURRENT_BID',
    id
  }
}

export const setTeamIdForPlayer = (id, teamId) => {
  return {
    type: 'SET_TEAM_ID_FOR_PLAYER',
    id,
    teamId
  }
}