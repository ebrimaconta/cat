import { combineReducers } from 'redux';
import votes from '../VotesReducers';
import cats from '../CatReducer';
import fav from '../FavReducers';

export default combineReducers({
  cats,
  votes,
  fav,
});
