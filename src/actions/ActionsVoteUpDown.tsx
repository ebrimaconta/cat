import { fetchGetVotesFn } from './ActionsGetVotes';

export const postVotesUp = (imageId: any) => {
  let addVote = {
    image_id: imageId,
    sub_id: 'votes',
    value: 1,
  };
  return (dispatch: any) => {
    return fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.REACT_APP_API}`,
      },
      body: JSON.stringify(addVote),
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchGetVotesFn());
      });
  };
};

// Handle HTTP errors since fetch won't.
function handleErrors(response: any) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const postVotesDown = (imageId: string) => {
  let downVote = {
    image_id: imageId,
    sub_id: 'votes',
    value: 0,
  };
  return (dispatch: any) => {
    return fetch('https://api.thecatapi.com/v1/votes', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'fcf38302-dbb6-492d-9423-f4b9fc6a0e28',
      },
      body: JSON.stringify(downVote),
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchGetVotesFn());
      });
  };
};
