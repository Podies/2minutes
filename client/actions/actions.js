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

export {
  showModal, hideModal, addActiveUser, addUserQuestionSet
};