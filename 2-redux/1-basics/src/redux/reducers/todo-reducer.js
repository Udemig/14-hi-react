const initialState = {
  todos: [],
  isLoading: true,
  error: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      // aksiyonun payload'ı ile gelen yeni nesneyi diziye ekle
      const newTodos = state.todos.concat(action.payload);

      // state'in son halini return et
      return { ...state, todos: newTodos };

    case "Y":
      return state;
    case "Z":
      return state;
    default:
      return state;
  }
};

export default todoReducer;
