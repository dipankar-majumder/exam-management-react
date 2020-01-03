import {
  GET_EXAMS,
  EXAMS_LOADING,
  EXAMS_LOADING_FAILED,
  ADD_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM,
} from '../actions/types';

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
    case ADD_EXAM:
      return { ...state, exams: [...state.exams, action.payload] };
    case UPDATE_EXAM:
      return {
        ...state,
        exams: state.exams.map(exam =>
          exam.id === action.payload.id ? action.payload : exam,
        ),
      };
    case DELETE_EXAM:
      return {
        ...state,
        exams: state.exams.filter(exam => exam.id !== action.payload),
      };
    default:
      return state;
  }
};
