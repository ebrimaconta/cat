import { fetchFavFn } from './ActionsFav';

export const deleteFav = (isInFav: any) => {
  return (dispatch: any) => {
    return fetch(`https://api.thecatapi.com/v1/favourites/${isInFav.id}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '70902a32-88a6-4aa5-9c52-e4bde636affc',
      },
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchFavFn());
        return json;
      });
  };
};

export const postFav = (imageID: string) => {
  return (dispatch: any) => {
    return fetch('https://api.thecatapi.com/v1/favourites', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': `${process.env.API}`,
      },

      body: JSON.stringify({
        image_id: imageID,
        sub_id: 'Fav',
      }),
    })
      .then(handleErrors)
      .then((res) => res.json())
      .then((json) => {
        dispatch(fetchFavFn());
        return json;
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
