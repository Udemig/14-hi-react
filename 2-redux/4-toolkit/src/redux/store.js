import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import crudReducer from "./slices/crudSlice";

/*
 * createStore vs configureStore
 * reducer'ları otomatik olarak birleştirir (combineReducers'a gerek yok)
 * redux thunk kurulu gelir
 * redux devtools kurulu gelir
 */

const store = configureStore({ reducer: { counterReducer, crudReducer } });

export default store;
