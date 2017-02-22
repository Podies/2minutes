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
  return (dispatch) => {
    return apiCalls.addNewQuestion(data)
      .then((res) => {
        dispatch(actions.addNewQuestion(res.data.question))
      },
      (err) => {
        return {};
      });
  };
};

const changePassword = (data) => {
  return (dispatch) => {
    return apiCalls.changePassword(data)
    .then(
      (res) => {
        // console.log(res.data);
        return true;
      },
      (err) => {
        return err.response;
      },
    );
  };
};

const addAnswer = (questionId, answer) => {
  return (dispatch) => {
    return apiCalls.addAnswer(questionId, answer)
    .then(
      (res) => {
        dispatch(actions.addAnswer(res.data));
        return true;
      },
      (err) => {
        return err.response;
      },
    );
  };
};

const logoutUser = () => {
  return (dispatch) => {
    dispatch(actions.logoutUser());
    return apiCalls.logout();
  };
};

const deleteQuestion = (questionId) => {
  return (dispatch) => {
    return apiCalls.deleteQuestion(questionId)
    .then(
      (res) => {
        dispatch(actions.deleteQuestion(res.data));
        return true;
      },
      (err) => {
        return false;
      },
    );
  };
};

export {
  fetchUserQuestionSet, addNewQuestion, changePassword, addAnswer, logoutUser, deleteQuestion
};