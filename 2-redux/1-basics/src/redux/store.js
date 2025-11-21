import { combineReducers, createStore, applyMiddleware } from "redux";
import themeReducer from "./reducers/theme-reducer";
import todoReducer from "./reducers/todo-reducer";
import { thunk } from "redux-thunk";

// reducer'ları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// rootReducer'ı kullanarak store'u oluştur
const store = createStore(rootReducer, applyMiddleware(thunk));

// projeye tanıtmak için export et
export default store;
