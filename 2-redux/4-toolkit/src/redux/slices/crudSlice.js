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

    // taski kaldır
    deleteTask: (state, action) => {
      // id'si bilenen task'in dizideki sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload);

      // diziden indexini bulduğum taski kaldır
      state.tasks.splice(index, 1);
    },

    // taski güncelle
    updateTask: (state, action) => {
      // güncellenicek elemanın sırasını bul
      const index = state.tasks.findIndex((i) => i.id === action.payload.id);

      // elemanı güncelle
      // yol - 1
      state.tasks[index] = action.payload;

      // yol - 2
      // state.tasks.splice(index, 1, action.payload);
    },
  },
});

// aksiyon tipleri ve aksiyon oluşturan fonksiyonlar
export const { createTask, deleteTask, updateTask } = crudSlice.actions;

// reducer
export default crudSlice.reducer;
