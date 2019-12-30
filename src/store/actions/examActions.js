import { EXAMS_LOADING, GET_EXAMS } from './types';

export const setExamsLoading = () => {
  return { type: EXAMS_LOADING };
};

export const getExams = () => {
  return { type: GET_EXAMS };
};
