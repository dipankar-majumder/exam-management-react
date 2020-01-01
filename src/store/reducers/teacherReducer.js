import { GET_TEACHERS, TEACHERS_LOADING } from '../actions/types';
import Axios from 'axios';

export default (
  state = {
    teachers: [],
    isLoading: false,
    isLoadingFailed: false,
  },
  action,
) => {
  switch (action.type) {
    case TEACHERS_LOADING:
      return { ...state, isLoading: true };
    case GET_TEACHERS:
      Axios.get('http://localhost:5000/teachers')
        .then(res => {
          console.log(res.data);
          return {
            ...state,
            teachers: res.data,
            isLoading: false,
          };
        })
        .catch(err => {
          console.log(err);
          return {
            ...state,
            teachers: [],
            isLoading: false,
            isLoadingFailed: true,
          };
        });
    default:
      return { ...state };
  }
};
