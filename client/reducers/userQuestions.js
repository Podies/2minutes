const defaultState = {
  questions: {},
  isLoading: true,
}

function userQuestions(state = defaultState, action) {
  const copy = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_USER_QUESTION_SET':
      copy.questions = action.data.questions;
      copy.isLoading = false;
      return copy;
    default:
      return state;
  }
}

export default userQuestions;