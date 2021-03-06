const showModal = (data) => {
  return {
    type: 'SHOW_MODAL',
    data
  };
};

const hideModal = () => {
  return{
    type: 'HIDE_MODAL',
  };
};

const addActiveUser = (data) => {
  return {
    type: 'ADD_ACTIVE_USER',
    data,
  };
};

const addUserQuestionSet = (data) => {
  return {
    type: 'ADD_USER_QUESTION_SET',
    data,
  };
};

const addNewQuestion = (data) => {
  return {
    type: 'ADDED_NEW_QUESTION',
    data,
  };
};

export {
  showModal, hideModal, addActiveUser, addUserQuestionSet, addNewQuestion,
};