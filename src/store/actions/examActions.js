import {
  EXAMS_LOADING,
  GET_EXAMS,
  EXAMS_LOADING_FAILED,
  ADD_EXAM,
  UPDATE_EXAM,
  DELETE_EXAM,
} from './types';

export const setExamsLoading = () => ({
  type: EXAMS_LOADING,
});

export const setExamsLoadingFailed = () => ({
  type: EXAMS_LOADING_FAILED,
});
export const getExams = exams => ({
  type: GET_EXAMS,
  payload: exams,
});

export const addExam = exam => ({
  type: ADD_EXAM,
  payload: exam,
});

export const updateExam = exam => ({
  type: UPDATE_EXAM,
  payload: exam,
});

export const deleteExam = examId => ({
  type: DELETE_EXAM,
  payload: examId,
});
