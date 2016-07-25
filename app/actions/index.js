const setSoldPlayer = (userId, value, managerId, roundId) => {
  return {
    type: 'SET_SOLD',
    userId,
    value,
    managerId,
    roundId
  }
}

const setUndoPlayer = (userId, value, managerId, roundId) => {
  return {
    type: 'SET_UNSOLD',
    userId,
    value,
    managerId,
    roundId
  }
}

let showPrevPlayer = () => {
    return (dispatch, getState) => {
        var currentRoundId = getState().biddingState.currentRoundId;
        var roundData = getState().rounds[currentRoundId];

        let userFound = false;
        let lastUserId = null;
        roundData['allPlayers'].map( (userId) => {
            if(!userFound) {
                if(getState().biddingState.currentPlayerId == userId) {
                    userFound = true;
                } else {
                    lastUserId = userId;
                }
            }
        });

        lastUserId && dispatch(setCurrentPlayer(lastUserId));
    };
};

let showNextPlayer = () => {

    return (dispatch, getState) => {
        var currentRoundId = getState().biddingState.currentRoundId;
        var roundData = getState().rounds[currentRoundId];
        var currentPlayerId = getState().biddingState.currentPlayerId;
        console.log(getState(),currentPlayerId);
        if(roundData['unSoldPlayers'].length > 0) {
            var nextPlayerId = false;
            let userFound = false;
            roundData['allPlayers'].map( (userId) => {
                if(!userFound) {
                    if(currentPlayerId == userId) {
                        userFound = true;
                    }
                }else if(!nextPlayerId){
                    nextPlayerId = userId;
                }
            });
            if(!nextPlayerId) {nextPlayerId = roundData['unSoldPlayers'][0]}
            dispatch(setCurrentPlayer(nextPlayerId));
        } else {
            let newRoundIdFound = false;
            getState().rounds.map( (roundData) => {
                if(!newRoundIdFound && roundData.roundId > currentRoundId) {
                    dispatch(setCurrentRound(roundData.roundId));
                    dispatch(setCurrentPlayer(roundData['unSoldPlayers'][0]));
                    newRoundIdFound = true;
                }
            });

            if(!newRoundIdFound) {

            }
        }
    };
};

const setCurrentRound = (id) => {
    return {
        type: 'SET_CURRENT_ROUND',
        id
    };
};

const setBiddingStartedForPlayer = (id) => {
  return {
    type: 'SET_BID_STARTED_FOR_PLAYER',
    id
  }
}

const setCurrentPlayer = (id) => {
    return {
        type: 'SET_CURRENT_PLAYER',
        id
    };
};

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
  setTeamIdForPlayer,
  setCurrentPlayer,
  setCurrentRound,
  showNextPlayer,
  showPrevPlayer,
  setUndoPlayer
};