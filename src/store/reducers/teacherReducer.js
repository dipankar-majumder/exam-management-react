import { GET_TEACHERS, TEACHERS_LOADING } from '../actions/types';
import Axios from 'axios';

export default (
  state = {
    teachers: [
      { id: 0, email: 'teacher0@email.com' },
      { id: 1, email: 'teacher1@email.com' },
    ],
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
