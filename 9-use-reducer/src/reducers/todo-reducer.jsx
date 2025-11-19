export const initialState = { theme: "KOYU", todos: [] };

const TodoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      // yeni temayı belirle
      const newTheme = state.theme === "KOYU" ? "AÇIK" : "KOYU";

      // state'in yeni değerini return et
      return { ...state, theme: newTheme };

    case "CREATE":
      // yeni todo nesnesi oluştur
      const newTodo = { text: action.payload, id: new Date().getTime() };

      // yeni todo nesnesini diziye ekle
      const updatedTodos = state.todos.concat(newTodo);

      // state'in yeni halini return et
      return { ...state, todos: updatedTodos };

    case "DELETE":
      // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // state'in son halini return et
      return { ...state, todos: filtredTodos };

    default:
      return state;
  }
};

export default TodoReducer;
