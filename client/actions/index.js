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

export {
  fetchUserQuestionSet,
}