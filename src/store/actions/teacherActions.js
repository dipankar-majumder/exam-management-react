import { GET_TEACHERS, TEACHERS_LOADING } from './types';

export const setTeachersLoading = () => {
  return { type: TEACHERS_LOADING };
};

export const getTeachers = () => {
  return { type: GET_TEACHERS };
};
