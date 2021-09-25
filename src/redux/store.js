import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";
import authReducer from "./auth";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ["auth"]
}

const reducer = combineReducers({
  todo: todoReducer,
  auth: authReducer
});

const persistedReducer = persistReducer(persistConfig, reducer)

// function myMiddleware(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

// const myMiddleware = (store) => (next) => (action) => {
//   console.log("Action", action, store.getState());
//   if (action.type === "ADD_TODO" && action.payload === "fuck") {
//     action.payload = "****";
//   }
//   return next(action);
// };

// const asyncMiddleware = (store) => (next) => (action) => {
//   if (typeof action === "function") {
//     return action(next);
//   }
//   return next(action);
// };

// const logger = createLogger();

// export default createStore(reducer, applyMiddleware(logger, thunk));

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});

export const persistor = persistStore(store);

export default store;