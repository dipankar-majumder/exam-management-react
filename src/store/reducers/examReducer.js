import { GET_EXAMS, EXAMS_LOADING, ADD_EXAM } from '../actions/types';
import Axios from 'axios';

export default (
  // Initial State
  state = {
    exams: [],
    isLoading: false,
  },
  action,
) => {
  switch (action.type) {
    case GET_EXAMS:
      Axios.get('http://localhost:5000/exams')
        .then(res => {
          return { ...state, exams: res.data.exams, isLoading: false };
        })
        .catch(err => console.log(err));
    case EXAMS_LOADING:
      return { ...state, isLoading: true };
    case ADD_EXAM:
      const exam = {
        ...action.payload,
        id: Math.floor(Math.random() * Math.pow(10, 11)),
      };
      return { ...state, exams: [...state.exams, exam] };
    default:
      return state;
  }
};
