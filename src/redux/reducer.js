import { createStore, combineReducers,applyMiddleware } from 'redux';
import _comments from '../data/comments';
import _posts from '../data/posts';

function comments(state = _comments, action) {
    return state;
  }
  
  function posts(state = _posts, action) {
    switch(action.type) {
      case 'INCREMENT_LIKES' :
        return [...state.slice(0,action.index),{...state[action.index], likes: state[action.index].likes+1},...state.slice(action.index + 1)]
       default:  return state
      
  }
}

  const rootReducer = combineReducers({posts, comments});
  export default rootReducer;
  