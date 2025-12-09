import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/*
 * createAsyncThunk ile asenkrın bir thunk aksiyonu oluşturucaz
 * sadece aksiyonun tipini ve döndürüceği payload'ı belirleriz
 * reducer'a haber verme işlemi otomatik olarak gerçekleşir(pending/fullfilled/rejected)
 * 1. Param) aksiyonun tipi
 * 2. Param) payload'ı return eden fonksiyon
 */
export const getUsers = createAsyncThunk("updated/getUsers", async () => {
  // api isteğini at
  const res = await axios.get("https://dummyjson.com/users");

  // aksiyonun payload'ını return et
  return res.data.users;
});

const updatedSlice = createSlice({
  name: "updated",
  initialState: { loading: true, error: null, data: null },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
  },
});

export default updatedSlice.reducer;
