import {combineReducers } from 'redux';
import _comments from '../data/comments';
import _posts from '../data/posts';

function comments(state = _comments, action) {
  
  switch(action.type) {
    case 'ADD_COMMENT' :
     if ((action.postId in {...state})) {
      return {...state, [action.postId] : [...state[action.postId] ,{text: action.comment}]}
    } else {
      return {...state, [action.postId] : [{text: action.comment}]}      
    }
  default:  return state
}
}
  function posts(state = _posts, action) {
    console.log(action.type)
    switch(action.type) {
      case 'REMOVE_PICTURE' :
        return [...state.slice(0,action.i),...state.slice(action.i + 1)]
      case 'ADD_PICTURE' :
         return [{"id": action.id, "imageLink": action.imageLink, "description": action.description},...state]
       default:  return state
  }
}

  const rootReducer = combineReducers({posts, comments});
  
  export default rootReducer;  