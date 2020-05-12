import { IS_APP_READY } from "redux-local/constants";

export const isAppReady = (payload) => {
  return { type: IS_APP_READY, payload };
};

export const handleAppStartup = () => {
  return (dispatch, getState) => {
    setTimeout(() => dispatch(isAppReady(true)), 3000);
  };
};
