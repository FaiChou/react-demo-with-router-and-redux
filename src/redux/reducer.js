import { combineReducers } from 'redux';

const users = (state=[], action) => {
  switch (action.type) {
    case 'ADD_USER' :
      return [
        action.user,
        ...state,
      ];
    case 'REMOVE_USER':
      return state.filter(u => u.id !== action.id);
    case 'CLEAR_ALL_USER':
     return [];
    default: return state;
  }
}

export default combineReducers({
  users,
});
