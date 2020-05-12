import { IS_APP_READY, PURGE_STORE } from "../constants";

const initialState = {
  isAppReady: false,
};

export const appStateReducers = (state = initialState, action) => {
  switch (action?.type) {
    case IS_APP_READY:
      return { ...state, isAppReady: action.payload };

    case PURGE_STORE:
      return initialState;

    default:
      return state;
  }
};
