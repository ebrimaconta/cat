import {
  FETCH_CATS,
  FETCH_CATS_SUCCESS,
  FETCH_CATS_FAILURE,
} from '../actions/ActionsGetCats';

export default function productReducer(state = {}, action: any) {
  switch (action.type) {
    case FETCH_CATS:
      return {
        ...state,
      };

    case FETCH_CATS_SUCCESS:
      return {
        ...state,
        fetchcats: action.payload.cats,
      };

    case FETCH_CATS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
