const defaultState = {
  questions: [],
  isLoading: true,
};

function userQuestions(state = defaultState, action) {
  const copy = Object.assign({}, state);
  switch(action.type) {
    case 'ADD_USER_QUESTION_SET':
      copy.questions = action.data.questions;
      copy.isLoading = false;
      return copy;
    case 'ADDED_NEW_QUESTION':
      copy.questions.unshift(action.data);
      copy.isLoading = false;
      return copy;
    case 'ADDED_ANSWER':
      const index = copy.questions.findIndex((question) => {
        return question._id == action.data.question._id;
      });
      copy.questions[index].answers = action.data.question.answers;
      return copy;
    default:
      return state;
  }
}

export default userQuestions;