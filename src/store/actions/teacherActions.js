import {
  GET_TEACHERS,
  TEACHERS_LOADING,
  TEACHERS_LOADING_FAILED,
} from './types';

export const setTeachersLoading = () => {
  return { type: TEACHERS_LOADING };
};

export const setTeachersLoadingFailed = () => {
  return { type: TEACHERS_LOADING_FAILED };
};

export const getTeachers = teachers => {
  return { type: GET_TEACHERS, payload: teachers };
};
