import axios from 'axios';


const fetchUserQuestionSet = (userId) => {
  const data = axios.get(`/api/questionset/${userId}`);
  return data;
}

export {
  fetchUserQuestionSet, 
}