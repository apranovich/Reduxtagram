function postComments(state = [], action){
  switch(action.type){
    case 'ADD_COMMENT': {  
      const {postId, author, comment} = action;
      return [
        ...state,
        {user: author, text: comment}
      ];
    }
    case 'REMOVE_COMMENT': {
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ];
    }
    default: 
      return state;
  }
}

export default function comments(state = [], action){
  if(typeof action.postId !== 'undefined'){
    return {
      ...state,
      [action.postId]: postComments(state[action.postId], action)
    }
  }
  return state;
}