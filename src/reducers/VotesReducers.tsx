import {
  FETCH_VOTES,
  FETCH_VOTES_SUCCESS,
  FETCH_VOTES_FAILURE,
} from '../actions/ActionsGetVotes';

export default function productReducer(state = {}, action: any) {
  switch (action.type) {
    case FETCH_VOTES:
      return {
        ...state,
      };

    case FETCH_VOTES_SUCCESS:
      return {
        ...state,
        fetchvotes: action.payload.votes,
      };

    case FETCH_VOTES_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
