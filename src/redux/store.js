import { createStore, applyMiddleware } from "redux";
import { allReducers } from "./allReducers";
import logger from "redux-logger";
import thunk from "redux-thunk";
import AsyncStorage from "@react-native-community/async-storage";
import { persistStore, persistReducer } from "redux-persist";

//Add object keys to the whitelist array, that need to stay in asyncstorage
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, allReducers);

//thunk has been added to deal with asynchronization issues.
//Remove logger on Production builds.

let store = createStore(persistedReducer, applyMiddleware(logger, thunk));
let persistor = persistStore(store);

export { store, persistor };
