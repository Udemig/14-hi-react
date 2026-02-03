import { combineReducers, configureStore } from "@reduxjs/toolkit";
import noteReducer from "./noteSlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

// reducer'ları birleştir
const rootReducer = combineReducers({ noteReducer });

// persist için ayar nesnesi
const persistConfig = {
  key: "store-state",
  storage,
  whileList: ["noteReducer"],
};

// persist reducer'ı oluşturur
const persistedReducer = persistReducer(persistConfig, rootReducer);

// store'u oluşltur
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // bu aksiyonları görmezden gel
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// store'u export et
export default store;

// persist store'u export et
export const persistor = persistStore(store);
