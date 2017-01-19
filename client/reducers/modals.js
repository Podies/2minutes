const defaultState = {
  type: '',
  info: ''
};

function modal(state = defaultState, action) {
  const copy = Object.assign({}, state);
  switch(action.type) {
    case 'SHOW_MODAL':
      copy.type = action.data.type;
      copy.info = action.data.info;
      return copy;
    case 'HIDE_MODAL':
      copy.type = '';
      copy.info = '';
      return copy;
    default:
      return state;
  }
}

export default modal;