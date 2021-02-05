export const FETCH_VOTES = 'FETCH_VOTES';
export const FETCH_VOTES_SUCCESS = 'FETCH_VOTES_SUCCESS';
export const FETCH_VOTES_FAILURE = 'FETCH_VOTES_FAILURE';

export const actionsGetVotes = () => ({
  type: FETCH_VOTES,
});

export const fetchVotesSuccess = (votes: any) => ({
  type: FETCH_VOTES_SUCCESS,
  payload: { votes },
});

export const fetchVotesFailure = (error: any) => ({
  type: FETCH_VOTES_FAILURE,
  payload: { error },
});

export const fetchGetVotesFn = () => {
  return (dispatch: any) => {
    dispatch(actionsGetVotes());
    return fetch('https://api.thecatapi.com/v1/votes', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.REACT_APP_API}`,
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchVotesSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchVotesFailure(error)));
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
