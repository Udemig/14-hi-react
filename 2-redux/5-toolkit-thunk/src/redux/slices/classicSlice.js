import { createSlice } from "@reduxjs/toolkit";

const classicSlice = createSlice({
  name: "classic",
  initialState: { loading: true, error: null, data: null },
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },

    setError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    setData: (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = classicSlice.actions;

export default classicSlice.reducer;
