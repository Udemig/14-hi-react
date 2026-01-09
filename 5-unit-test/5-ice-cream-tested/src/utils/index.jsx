import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/slices/cartSlice";
import productsReducer from "../redux/slices/productSlice";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

// Test ortamı için sahte store oluşturmaya yarayan yardımcı fonksiyon
export const createMockStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      products: productsReducer,
    },
    preloadedState,
  });
};

// Test ortamında componentı renderlarken provider ile sarmayalayıp renderlayan fonksiyon
export const renderWithProvider = (ui, { s = {}, store = createMockStore(s), ...renderOptions } = {}) => {
  const Wrapper = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};
