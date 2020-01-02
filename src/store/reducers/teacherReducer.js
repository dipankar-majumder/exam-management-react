import {
  GET_TEACHERS,
  TEACHERS_LOADING,
  TEACHERS_LOADING_FAILED,
} from '../actions/types';

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
      return { ...state, isLoading: true, isLoadingFailed: false };
    case GET_TEACHERS:
      return {
        ...state,
        teachers: action.payload,
        isLoading: false,
        isLoadingFailed: false,
      };
    case TEACHERS_LOADING_FAILED:
      return { ...state, isLoading: false, isLoadingFailed: true };
    default:
      return { ...state };
  }
};
