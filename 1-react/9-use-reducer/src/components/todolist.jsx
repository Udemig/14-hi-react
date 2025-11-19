import { useReducer } from "react";
import TodoReducer, { initialState } from "../reducers/todo-reducer";

const TodoList = () => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // yazı yoksa hata gönder
    if (!text) return alert("Lütfen içerik giriniz!");

    // state'e yeni todo'yu eklemek istediğimizi reducer'a haber ver
    dispatch({ type: "CREATE", payload: text });
  };

  return (
    <div>
      <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>Tema Değiş</button>
      <h1>Tema: {state.theme}</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo yazınız" />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            {todo.text} <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
