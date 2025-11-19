import { useEffect, useState } from "react";
import api from "./api/axios";
import Form from "./components/form";
import ListItem from "./components/list-item";

const App = () => {
  const [todos, setTodos] = useState([]);

  // component ekrana basılınca (axios)
  useEffect(() => {
    // api'a gönderilecek parametreleri hazırla
    const params = { _sort: "date", _order: "desc" };

    // api'dan todo verilerini alıp state'e aktar
    api.get("/todos", { params }).then((res) => setTodos(res.data));
  }, []);

  // yeni todo oluşturma fonksiyonu
  const createTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  // bir todoyu silme fonksiyonu
  const deleteTodo = (id) => {
    // parametre olarak gelen id'li todo'yu diziden kaldır
    const filtred = todos.filter((todo) => todo.id !== id);

    // state'i güncelle
    setTodos(filtred);
  };

  // bir todo'yu güncelleme fonksiyonu
  const updateTodo = (id, updateData) => {
    const updated = todos.map((todo) => (todo.id === id ? { id, ...updateData } : todo));

    setTodos(updated);
  };

  return (
    <div className="app-container">
      <header>
        <h1>TODO App</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>

      <Form createTodo={createTodo} />

      <div className="list">
        {todos.map((todo) => (
          <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;
