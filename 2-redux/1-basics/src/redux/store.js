import { combineReducers, createStore } from "redux";
import themeReducer from "./reducers/theme-reducer";
import todoReducer from "./reducers/todo-reducer";

// reducer'ları birleştir
const rootReducer = combineReducers({ todoReducer, themeReducer });

// rootReducer'ı kullanarak store'u oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export et
export default store;
