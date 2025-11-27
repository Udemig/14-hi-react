import { createStore, applyMiddleware, combineReducers } from "redux";
import watchListReducer from "./reducers/watch-list-reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ watchlist: watchListReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
