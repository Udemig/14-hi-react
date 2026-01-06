import { configureStore } from "@reduxjs/toolkit";
import DetailReducer from "./detailSlice";

const store = configureStore({ reducer: DetailReducer });

export default store;
