const defaultState = null;

function activeUser(state = defaultState, action) {
  const copy = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_ACTIVE_USER':
    return action.data;
  default:
    return state;
  }
}

export default activeUser;