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

export {
  showModal, hideModal, addActiveUser
};