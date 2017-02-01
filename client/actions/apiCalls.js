import axios from 'axios';

const fetchUserQuestionSet = (userId) => {
  const data = axios.get(`/api/questionset/${userId}`);
  return data;
};

const addNewQuestion = (data) => {
  return axios.post('/users/question', data);
};

const changePassword = (data) => {
  return axios.post(`/users/changepassword`, data);
};

const addAnswer = (questionId, answer) => {
  return axios.post(`/api/answer/${questionId}`, { answer });
};

export {
  fetchUserQuestionSet, addNewQuestion, changePassword, addAnswer,
};