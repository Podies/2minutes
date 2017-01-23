import * as actions from './actions';
import * as apiCalls from './apiCalls';

const fetchUserQuestionSet = (userId) => {
  return (dispatch)=> {
    return apiCalls.fetchUserQuestionSet(userId)
      .then((res) => {
        dispatch(actions.addUserQuestionSet(res.data.questionSet))
      },
      (err) => {
        return {};
      });
  };
};

const addNewQuestion = (data) => {
  return (dispatch)=> {
    return apiCalls.addNewQuestion(data)
      .then((res) => {
        dispatch(actions.addNewQuestion(res.data.question))
      },
      (err) => {
        return {};
      });
  };
};

export {
  fetchUserQuestionSet, addNewQuestion
}