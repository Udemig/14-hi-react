import ACTION_TYPES from "./action-types";

// Component içerisindeki aksiyon yazımını daha minaml hale getirmek için aksiyon oluşturan fonksiyonlar hazırlayabiliriz
const createTodo = (payload) => ({ type: ACTION_TYPES.CREATE, payload });

const updateTodo = (payload) => ({ type: ACTION_TYPES.UPDATE, payload });

const deleteTodo = (payload) => ({ type: ACTION_TYPES.DELETE, payload });

const toggleTodo = (payload) => ({ type: ACTION_TYPES.TOGGLE, payload });

const setError = (payload) => ({ type: ACTION_TYPES.ERROR, payload });

const setLoading = () => ({ type: ACTION_TYPES.LOADING });

const setTodos = (payload) => ({ type: ACTION_TYPES.SUCCESS, payload });

export { createTodo, updateTodo, deleteTodo, toggleTodo, setError, setLoading, setTodos };
