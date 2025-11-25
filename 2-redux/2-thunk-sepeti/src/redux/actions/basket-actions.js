import api from "../../api";
import ACTIONS from "./action-types";

// sepetteki ürünleri alıp reducer'a aktarıcak thunk aksiyonu
export const getBasket = () => (dispatch) => {
  dispatch({ type: ACTIONS.BASKET_LOADING });

  api
    .get("/cart")
    .then((res) => dispatch({ type: ACTIONS.BASKET_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: ACTIONS.BASKET_ERROR, payload: err.message }));
};

// TODO
// sepete yeni ürün ekleyen thunk aksiyonu
export const createItem = (product) => (dispatch) => {
  alert("sepete yeni ürün eklendi");
};

// sepetteki ürünü güncelleyen thunk aksiyonu
export const updateItem = (productId, newAmount) => (dispatch) => {
  alert("sepetteki ürünün miktarı güncellendi");
};
