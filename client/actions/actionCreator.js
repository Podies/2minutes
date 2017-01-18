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

export {
  showModal, hideModal
};