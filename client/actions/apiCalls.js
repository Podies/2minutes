import axios from 'axios';


const fetchUserQuestionSet = (userId) => {
  const data = axios.get(`/api/questionset/${userId}`);
  return data;
}

const addNewQuestion = (data) => {
  return axios.post('/users/question', data);
}

export {
  fetchUserQuestionSet, addNewQuestion
}