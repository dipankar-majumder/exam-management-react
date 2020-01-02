import { EXAMS_LOADING, GET_EXAMS, EXAMS_LOADING_FAILED } from './types';

export const setExamsLoading = () => {
  return { type: EXAMS_LOADING };
};

export const setExamsLoadingFailed = () => {
  return { type: EXAMS_LOADING_FAILED };
};

export const getExams = exams => {
  return { type: GET_EXAMS, payload: exams };
};
