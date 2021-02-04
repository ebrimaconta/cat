export const FETCH_FAV = 'FETCH_VOTES';
export const FETCH_FAV_SUCCESS = 'FETCH_VOTES_SUCCESS';
export const FETCH_FAV_FAILURE = 'FETCH_VOTES_FAILURE';

export const actionsGetVotes = () => ({
  type: FETCH_FAV,
});

export const fetchVotesSuccess = (votes: any) => ({
  type: FETCH_FAV_SUCCESS,
  payload: { votes },
});

export const fetchVotesFailure = (error: any) => ({
  type: FETCH_FAV_FAILURE,
  payload: { error },
});

export const fetchFavFn = () => {
  return (dispatch: any) => {
    dispatch(actionsGetVotes());
    return fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key':`${process.env.API}`,
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
