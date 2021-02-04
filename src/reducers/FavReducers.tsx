import {
  FETCH_FAV,
  FETCH_FAV_SUCCESS,
  FETCH_FAV_FAILURE,
} from '../actions/Fav/ActionsFav';

export default function productReducer(state = {}, action: any) {
  switch (action.type) {
    case FETCH_FAV:
      return {
        ...state,
      };

    case FETCH_FAV_SUCCESS:
      return {
        ...state,
        fetchFavs: action.payload.votes,
      };

    case FETCH_FAV_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
