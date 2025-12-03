import api from "../../api";
import ACTIONS from "../actions/actionTypes";

// thunk aksiyonu
// todo header film sayısı
// todo detay sayfasında listeden çıkarma özelliği
export const toggleWatchList = (movie, isAdd) => (dispatch) => {
  // api'a gönderilecek veriyi hazırla
  const body = {
    media_type: "movie",
    media_id: movie.id,
    watchlist: isAdd,
  };

  // api isteği at
  api
    .post("account/19719088/watchlist", body)
    // istek başarılı olursa reducer'a haber ver
    .then(() => {
      // ekleme/çıkarma durumuna göre reducer'a haber
      isAdd
        ? dispatch({ type: ACTIONS.ADD_TO_LIST, payload: movie })
        : dispatch({ type: ACTIONS.REMOVE_FROM_LIST, payload: movie.id });
    });
};

export const getWatchList = () => (dispatch) => {
  dispatch({ type: ACTIONS.LIST_LOADING });

  api
    .get("account/19719088/watchlist/movies")
    .then((res) => dispatch({ type: ACTIONS.LIST_SUCCESS, payload: res.data.results }))
    .catch((err) => dispatch({ type: ACTIONS.LIST_ERROR, payload: err.message }));
};
