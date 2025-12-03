import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { INITIAL_TASKS } from "../../constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: INITIAL_TASKS },
  reducers: {
    // yeni task oluştur
    createTask: (state, action) => {
      // yeni task'e id tanımla
      action.payload.id = v4();

      // tasks dizisine yeni taski ekle
      state.tasks.unshift(action.payload);
    },
  },
});

// aksiyon tipleri ve aksiyon oluşturan fonksiyonlar
export const { createTask } = crudSlice.actions;

// reducer
export default crudSlice.reducer;
