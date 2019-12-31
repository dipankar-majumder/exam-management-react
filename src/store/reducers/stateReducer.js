import { CHANGE_APPBAR_TITLE } from '../actions/types';

const initialState = {
  appBarTitle: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APPBAR_TITLE:
      return {
        ...state,
        appBarTitle: action.payload,
      };
    default:
      return state;
  }
};
