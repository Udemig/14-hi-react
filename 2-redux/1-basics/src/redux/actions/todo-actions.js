import { setError, setLoading, setTodos } from ".";
import api from "../../api";
import ACTION_TYPES from "./action-types";

/*
 ! Thunk Aksiyonu
 * İki fonksiyonu iç içe tanımlarız
 * İçerideki fonksiyon asenkron olabilir ve dispatch'i parametre olarak alır
*/
export const getTodos = () => {
  return (dispatch) => {
    dispatch(setLoading());

    api
      .get("/todos")
      .then((res) => dispatch(setTodos(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };
};

export const createTodo = (newTodo) => (dispatch) => {
  api
    .post("/todos", newTodo)
    .then(() => dispatch({ type: ACTION_TYPES.CREATE, payload: newTodo }))
    .catch(() => alert("istek başarısız"));
};

export const deleteTodo = (id) => (dispatch) => {
  api
    .delete(`/todos/${id}`)
    .then(() => dispatch({ type: ACTION_TYPES.DELETE, payload: id }))
    .cath(() => alert("işlem başarısız"));
};

export const toggleStatus =
  ({ id, isDone }) =>
  (dispatch) => {
    api
      .patch(`/todos/${id}`, { isDone })
      .then(() => dispatch({ type: ACTION_TYPES.TOGGLE, payload: id }))
      .catch(() => alert("işlem başarısız"));
  };

export const updateTodo = (newTodo) => (dispatch) => {
  api
    .put(`/todos/${newTodo.id}`, newTodo)
    // reducer'a güncelleme için haber gönder
    .then(() => dispatch({ type: ACTION_TYPES.UPDATE, payload: newTodo }))
    .catch(() => alert("istek başarısız"));
};
