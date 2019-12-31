import { CHANGE_APPBAR_TITLE } from './types';

export const changeAppBarTitle = appBarTitle => {
  return { type: CHANGE_APPBAR_TITLE, payload: appBarTitle };
};
