export const addUser = user => ({
  type: 'ADD_USER',
  user,
});

export const removeUser = userId => ({
  type: 'REMOVE_USER',
  id: userId,
});

export const clearUser = { type: 'CLEAR_ALL_USER' };
