import { GET_TEACHERS, TEACHERS_LOADING } from '../actions/types';
import Axios from 'axios';

export default (
  state = {
    teachers: [],
    isLoading: false,
  },
  action,
) => {
  switch (action.type) {
    case TEACHERS_LOADING:
      return { ...state, isLoading: true };
    case GET_TEACHERS:
      Axios.get('http://localhost:5000/teachers')
        .then(res => {
          return { ...state, teachers: res.data.teachers };
        })
        .catch(err => console.log(err));
    default:
      return { ...state };
  }
};
