const defaultState = null;

function activeUser(state = defaultState, action) {
  const copy = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_ACTIVE_USER':
      return action.data;
    case 'LOGOUT_USER':
      return null;
  default:
    return state;
  }
}

export default activeUser;