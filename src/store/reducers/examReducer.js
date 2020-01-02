import {
  GET_EXAMS,
  EXAMS_LOADING,
  EXAMS_LOADING_FAILED,
} from '../actions/types';
import Axios from 'axios';

export default (
  // Initial State
  state = {
    exams: [],
    isLoading: false,
    isLoadingFailed: false,
  },
  action,
) => {
  switch (action.type) {
    case EXAMS_LOADING:
      return { ...state, isLoading: true, isLoadingFailed: false };
    case GET_EXAMS:
      return {
        ...state,
        exams: action.payload,
        isLoading: false,
        isLoadingFailed: false,
      };
    case EXAMS_LOADING_FAILED:
      return { ...state, isLoading: false, isLoadingFailed: true };
    default:
      return state;
  }
};
