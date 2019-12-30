import { CHANGE_APPBARTITLE } from './types';

export const changeAppBarTitle = appBarTitle => {
  return { type: CHANGE_APPBARTITLE, payload: appBarTitle };
};
