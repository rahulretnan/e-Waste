import { applyMiddleware, compose, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { AsyncStorage } from "react-native";
import logger from "redux-logger";

import createRootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  blacklist: ["router"]
};

const persistedReducer = persistReducer(persistConfig, createRootReducer);

let store = createStore(persistedReducer, applyMiddleware(logger));
let persistor = persistStore(store);

export { store, persistor };
