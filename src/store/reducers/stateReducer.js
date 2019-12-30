import { CHANGE_APPBARTITLE } from '../actions/types';

const initialState = {
  appBarTitle: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_APPBARTITLE:
      return {
        ...state,
        appBarTitle: action.payload,
      };
    default:
      return state;
  }
};
