import { combineReducers } from "redux";
import { appStateReducers } from "redux-local/reducers/appStateReducer";

export const allReducers = combineReducers({
  app: appStateReducers,
});
