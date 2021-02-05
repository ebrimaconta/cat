export const FETCH_CATS = 'FETCH_CATS';
export const FETCH_CATS_SUCCESS = 'FETCH_CATS_SUCCESS';
export const FETCH_CATS_FAILURE = 'FETCH_CATS_FAILURE';

export const actionsGetCats = () => ({
  type: FETCH_CATS,
});

export const fetchCatsSuccess = (cats: any) => ({
  type: FETCH_CATS_SUCCESS,
  payload: { cats },
});

export const fetchCatsFailure = (error: any) => ({
  type: FETCH_CATS_FAILURE,
  payload: { error },
});

export const fetchGetCatsFn = () => {
  return (dispatch: any) => {
    dispatch(actionsGetCats());
    return fetch('https://api.thecatapi.com/v1/images?limit=10', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.REACT_APP_API}`,
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchCatsSuccess(json));
        return json;
      })
      .catch((error) => dispatch(fetchCatsFailure(error)));
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
