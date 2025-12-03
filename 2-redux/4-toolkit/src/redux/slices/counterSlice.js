/*
 ! Slice
 * Hem reducer'ı hem aksiyon oluşturan fonksion'ları hem aksiyon tiplerini tek noktada oluşturur.

 * Nasıl slice oluşturuyoruz?
 * 1) import { createSlice } from "@reduxjs/toolkit";
 * 2) name: slice ismi > string
 * 3) initialState: başlangıç state'i > object
 * 4) reducers: aksiyon'ları ve görev'lerini tanımlıyoruz
  
 ! Not: Reducers içerisinde yazılan fonksiyonlarda klasik redux'tan farklı olarak state'i doğrudan güncelleyebiliyoruz 
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { count: 1, theme: "dark" },
  reducers: {
    increase: (state) => {
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// aksiyon tipleri ve aksiyon oluşturan fonksiyonlar
export const { increase, decrease, setCount } = counterSlice.actions;

// reducer
export default counterSlice.reducer;
