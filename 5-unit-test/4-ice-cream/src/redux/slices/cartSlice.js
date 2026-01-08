import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    toggleCart: (state) => {
      state.isOpen = !state.isOpen;
    },
    addToCart: (state, action) => {
      const { id, orderType } = action.payload;
      const existingItem = state.cart.find(
        (item) => item.id === id && item.orderType === orderType
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const { id, orderType } = action.payload;
      state.cart = state.cart.filter(
        (item) => !(item.id === id && item.orderType === orderType)
      );
    },
    updateQuantity: (state, action) => {
      const { id, orderType, quantity } = action.payload;
      const item = state.cart.find(
        (item) => item.id === id && item.orderType === orderType
      );

      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          state.cart = state.cart.filter(
            (i) => !(i.id === id && i.orderType === orderType)
          );
        }
      }
    },
    clearCart: (state) => {
      state.cart = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  clearCart,
  toggleCart,
} = cartSlice.actions;
export default cartSlice.reducer;
